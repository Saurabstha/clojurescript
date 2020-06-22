(ns helloworld.core
	#?(:cljs (:require [reagent.core :as reagent])))

(defn say-hello []
  #?(:cljs (js/console.log js/React)))

(say-hello)