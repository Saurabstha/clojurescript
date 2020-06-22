(ns helloworld.core
	(:require [reagent.core :as reagent]
			  [helloworld.title :refer (header)]))

(def app-state
	(reagent/atom 
		{:message "Hello form app State"
		:items [{:display "Item 1"}
            {:display "Item 2"}
            {:display "Item 3"}
            {:display "Item 4"}
            {:display "Item 5"}]
        :active-item {}}))

(defn items-list [items active-item]
	[:div {:class "items-list"}
			(for [item items]
				^{:key (:display item)}
				[:div {:class (if (= active-item item) "item active" "item") } 
				[:p 
					{:on-click (fn [event] (swap! app-state assoc-in [:active-item] item))}

				 	(:display item)]])])



(defn app []
	[:div {:class "container"}
		[header (:message @app-state)]
		[items-list (:items @app-state) (:active-item @app-state)]])


(reagent/render [app] (js/document.querySelector "#cljs-target"))

(comment 
	(js/setTimeout
	(fn [] (swap! app-state assoc-in [:message] "Changed"))
	2000))