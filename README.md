# gordiagram
simple wire mess


```ruby

ka6 = Device.new
ka6.name = "Komplete Audio 6"

ka6.view = { back:  "https://images-na.ssl-images-amazon.com/images/I/819%2BXigLT7L._SL1500_.jpg",
             front: "http://www.loopinsight.com/wp-content/uploads/NI_Komplete_Audio_6_Front.png" }

ka6.io = [
  { group: "input 1",
    io:
      { id: "input1", plug: Neutrik.♀ },
      { id: "input1.gain", plug: Pot.725, label: "Gain" },
      { id: "Line/Inst", plug: Toggle, label: "█ Line / ▄ Inst" }
    }
  ]
  
    
```
