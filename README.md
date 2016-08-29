# gordiagram
simple wire mess



## Define shit

Define shit in text, as simply as possible

```ruby

ka6 = Device.new
ka6.name = "Komplete Audio 6"

ka6.view = { back:  "https://images-na.ssl-images-amazon.com/images/I/819%2BXigLT7L._SL1500_.jpg",
             front: "http://www.loopinsight.com/wp-content/uploads/NI_Komplete_Audio_6_Front.png" }

ka6.io = [
  { group: "Input 1",
    io:
      { plug: Neutrik.♀ },
      { plug: Pot.725, label: "Gain" },
      { plug: Toggle, label: "█ Line / ▄ Inst" }
    }
  ]
  
    
```

## Patch shit and configure shit

Define settings and connections, as simply as possible.

## Display shit

Render visual representation of your shit, as fanciful as possible.
