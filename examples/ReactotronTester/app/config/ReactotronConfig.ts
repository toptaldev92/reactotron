import Reactotron from "reactotron-react-native"
import { reactotronRedux as reduxPlugin } from "reactotron-redux"
import { mst } from "reactotron-mst"

Reactotron.configure({
  name: "Demo App",
})

Reactotron.useReactNative({
  asyncStorage: {
    ignore: ["ignore-me"],
  },
})

Reactotron.use(reduxPlugin())
Reactotron.use(mst())

Reactotron.connect()
Reactotron.clear()
