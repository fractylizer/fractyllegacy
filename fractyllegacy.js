G.AddData({
  name:'FractylLegacy',
  author:'Fractyl',
  desc:'A very silly mod that does nothing.',
  engineVersion:1,
  manifest:'https://fractylizer.github.io/fractyllegacy/manifest.js',
  requires:['Default dataset*'],
  sheets:{'flicons':'https://fractylizer.github.io/fractyllegacy/img/icons.png'},
  func:function()
  {
    new G.Res({
      name:'big mac',
      desc:'[big mac]s are full of [big mac sauce] and never expire.',
      icon:[0,0,'fliconsSheet'],
      turnToByContext:{'eat':{'health':0.01,'happiness':0.5},'decay':{'big mac':1}},
      partOf:'food',
      category:'food',
    });
    new G.Res({
      name:'big mac sauce',
      desc:'Made from [bugs] and [muddy water]. For some reason, it tastes great on things other than [big mac]s.',
      icon:[1,0,'flicons'],
      turnToByContext:{'eat':{'health':0.03,'happiness':0.1},'decay':{'big mac sauce':0.95,'spoiled food':0.05}},
      partOf:'food',
      category:'food',
    });
    
    
    G.getDict('grass').res['gather']['big mac sauce']=3;
      
    G.getDict('artisan').modes['big mac sauce']={name:'Make Big Mac sauce',desc:'Turn 3 [bugs] and 3 [muddy water] into 1 [big mac sauce].',req:{'mcdonalds training':true},use:{'knapped tools':1}};
      
    G.getDict('artisan').effects.push({type:'convert',from:{'bugs':3,'muddy water':3},into:{'big mac sauce':1},every:3,mode:'big mac sauce'});
    
   
    new G.Tech({
      name:'mcdonalds training',
      desc:'@[artisan]s can now produce [big mac sauce].//Big Mac Moment.',
      icon:[1,0,'flicons'],
      cost:{'insight':1},
      req:{'speech':true},
    });
    
    new G.Trait({
      name:'big mac madness',
      desc:'@your people appreciate [big mac] twice as much and will be twice as happy from consuming it.',
      icon:[0,0,'flicons'],
      chance:20,
      req:{'mcdonalds training':true},
      effects:[
        {type:'function',func:function(){G.getDict('big mac').turnToByContext['eat']['happiness']=1;}},//this is a custom function executed when we gain the trait
      ],
    });
    
  }
  });