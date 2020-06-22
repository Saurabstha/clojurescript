(ns helloworld.core)

(defn say-hello []
  #?(:clj (println  "Hello from clojure......")
  	:cljs (js/alert "hello from clojurescript")))

(say-hello)