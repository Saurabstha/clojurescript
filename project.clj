(defproject helloworld "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :main helloworld.core

 :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src"]
                        ;; :figwheel true
                        :compiler
                        {:optimizations :none
                         :output-to "resources/public/javascripts/dev.js"
                         :output-dir "resources/public/javascripts/cljs-dev/"
                         :pretty-print true
                         :source-map true}}]}

  :plugins [[lein-cljsbuild "1.1.8"]]


  :figwheel {:css-dirs ["resources/public/stylesheets"]}

  :dependencies [[org.clojure/clojure "1.10.1"]
  				[org.clojure/clojurescript "1.10.764"]
  				[reagent "0.5.0"]]
  :repl-options {:init-ns helloworld.core})
