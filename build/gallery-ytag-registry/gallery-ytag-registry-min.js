YUI.add("gallery-ytag-registry",function(a){YUI.add("ytag-ybutton",function(b){b.namespace("YTag.Tags").ybutton=b.Base.create("ybutton",b.YTag.Plugin,[],{initializer:function(){var c=this.get("host");c.append("<div></div>");this._button=new b.Button(b.merge(this.getData(),{srcNode:c.one("div"),render:true}));}},{});},"",{requires:["button"]});YUI.add("ytag-ydial",function(b){b.namespace("YTag.Tags").ydial=b.Base.create("ydial",b.YTag.Plugin,[],{initializer:function(){var c=this.get("host");c.append('<div class="yui3-skin-sam"></div>');this._button=new b.Dial(b.merge(this.getData(),{srcNode:c.one("div"),render:true}));}},{});},"",{requires:["dial"]});YUI.add("ytag-ysuggest",function(b){b.namespace("YTag.Tags").ysuggest=b.Base.create("ysuggest",b.YTag.Plugin,[],{initializer:function(){var c=this.get("host");c.append('<div class="yui3-skin-sam"><input type="text" /></div>');c.one("input").plug(b.Plugin.AutoComplete,{resultHighlighter:"phraseMatch",source:'select * from search.suggest where query="{query}"',yqlEnv:"http://pieisgood.org/yql/tables.env"});}},{});},"",{requires:["autocomplete","autocomplete-highlighters"]});a.YTag.register("ybutton");a.YTag.register("ydial");a.YTag.register("ysuggest");},"gallery-2012.06.20-20-07",{requires:["gallery-ytag"],skinnable:false});