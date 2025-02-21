import type { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import { Tabs } from "expo-router"
import type { ForwardRefExoticComponent } from "react"
import { forwardRef, useMemo, useRef, useState } from "react"
import type { FlatList, ScrollView } from "react-native"
import { useSharedValue } from "react-native-reanimated"

import { BottomTabHeightProvider } from "./BottomTabHeightProvider"
import {
  AttachNavigationScrollViewContext,
  SetAttachNavigationScrollViewContext,
} from "./contexts/AttachNavigationScrollViewContext"
import { BottomTabBarBackgroundContext } from "./contexts/BottomTabBarBackgroundContext"
import {
  BottomTabBarVisibleContext,
  SetBottomTabBarVisibleContext,
} from "./contexts/BottomTabBarVisibleContext"
import { Tabbar } from "./Tabbar"

type ExtractReactForwardRefExoticComponent<T> =
  T extends React.ForwardRefExoticComponent<infer P> ? P : never

export const BottomTabs: ForwardRefExoticComponent<
  Omit<ExtractReactForwardRefExoticComponent<typeof Tabs>, "tabBar">
> = forwardRef((props, ref) => {
  const opacity = useSharedValue(1)
  const [tabBarVisible, setTabBarVisible] = useState(true)
  const [attachNavigationScrollViewRef, setAttachNavigationScrollViewRef] =
    useState<React.RefObject<ScrollView> | null>(null)

  const currentTarget = useRef<string | undefined>(undefined)
  return (
    <AttachNavigationScrollViewContext.Provider value={attachNavigationScrollViewRef}>
      <SetAttachNavigationScrollViewContext.Provider value={setAttachNavigationScrollViewRef}>
        <BottomTabBarBackgroundContext.Provider value={useMemo(() => ({ opacity }), [opacity])}>
          <SetBottomTabBarVisibleContext.Provider value={setTabBarVisible}>
            <BottomTabBarVisibleContext.Provider value={tabBarVisible}>
              <BottomTabHeightProvider>
                <Tabs
                  {...props}
                  tabBar={TabBar}
                  screenListeners={{
                    ...props.screenListeners,
                    tabPress: (e) => {
                      if (props.screenListeners && "tabPress" in props.screenListeners) {
                        props.screenListeners.tabPress!(e)
                      }

                      if (currentTarget.current === e.target) {
                        const $scroller = attachNavigationScrollViewRef?.current as any

                        if ("scrollTo" in $scroller) {
                          ;($scroller as ScrollView).scrollTo({
                            y: 0,
                            animated: true,
                          })
                        } else if ("scrollToIndex" in $scroller) {
                          ;($scroller as FlatList<any>).scrollToIndex({
                            index: 0,
                            animated: true,
                          })
                        } else if ("scrollToOffset" in $scroller) {
                          ;($scroller as FlatList<any>).scrollToOffset({
                            offset: 0,
                            animated: true,
                          })
                        }
                        return
                      }

                      opacity.value = 1
                      currentTarget.current = e.target
                    },
                    transitionStart: (e) => {
                      if (props.screenListeners && "transitionStart" in props.screenListeners) {
                        props.screenListeners.transitionStart!(e)
                      }
                      currentTarget.current = e.target
                      opacity.value = 1
                    },
                  }}
                  ref={ref}
                />
              </BottomTabHeightProvider>
            </BottomTabBarVisibleContext.Provider>
          </SetBottomTabBarVisibleContext.Provider>
        </BottomTabBarBackgroundContext.Provider>
      </SetAttachNavigationScrollViewContext.Provider>
    </AttachNavigationScrollViewContext.Provider>
  )
})
const TabBar = (props: BottomTabBarProps) => <Tabbar {...props} />
