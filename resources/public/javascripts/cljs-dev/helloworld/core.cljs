(ns helloworld.core
	(:require [reagent.core :as reagent]))

(def app-state
	(reagent/atom 
		{:message "Hello form app State"}))

(defn app []
	[:div {}
		[:h1 {:class (if (> 5 13) "active")} (:message @app-state)]])

(reagent/render [app] (js/document.querySelector "#cljs-target"))