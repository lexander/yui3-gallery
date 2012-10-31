YUI.add("gallery-fwt-treeview",function(a){var c=a.Lang,b=a.ClassNameManager.getClassName,i=function(j){return b("fw-treeview",j);},g={toggle:i("toggle"),icon:i("icon"),selection:i("selection"),content:i("content"),sel_prefix:i("selected-state")},h="contentBox",d=0,e=1,f=2;a.FWTreeView=a.Base.create("fw-treeview",a.Widget,[a.FlyweightTreeManager],{initializer:function(j){this._domEvents=["click"];this._loadConfig(j.tree);},renderUI:function(){this.get(h).setContent(this._getHTML());},CONTENT_TEMPLATE:"<ul></ul>"},{ATTRS:{defaultType:{value:"FWTreeNode"},toggleOnLabelClick:{value:false,validator:c.isBoolean}}});a.FWTreeNode=a.Base.create("fw-treenode",a.FlyweightTreeNode,[],{initializer:function(){this.after("click",this._afterClick,this);this.after("selectedChange",this._afterSelectedChange,this);},_afterClick:function(j){var k=j.domEvent.target;if(k.hasClass(g.toggle)){this.toggle();}else{if(k.hasClass(g.selection)){this.toggleSelection();}else{if(k.hasClass(g.content)||k.hasClass(g.icon)){if(this.get("root").get("toggleOnLabelClick")){this.toggle();}}}}},toggleSelection:function(){this.set("selected",(this.get("selected")?d:f));},_afterSelectedChange:function(k){var j=k.newVal;if(!this.isRoot()){a.one("#"+this.get("id")).replaceClass("yui3-fw-treeview-selected-state-"+k.prevVal,"yui3-fw-treeview-selected-state-"+j);if(this.get("propagateUp")&&k.src!=="propagatingDown"){this.getParent()._childSelectedChange().release();}}if(this.get("propagateDown")&&k.src!=="propagatingUp"){this.forSomeChildren(function(l){l.set("selected",j,"propagatingDown");});}},_dynamicLoadReturn:function(){a.FWTreeNode.superclass._dynamicLoadReturn.apply(this,arguments);if(this.get("propagateDown")){var j=this.get("selected");this.forSomeChildren(function(k){k.set("selected",j,"propagatingDown");});}},_childSelectedChange:function(){var k=0,j=0;this.forSomeChildren(function(l){k+=2;j+=l.get("selected");});this.set("selected",(j===0?d:(j===k?f:e)),{src:"propagatingUp"});return this;}},{TEMPLATE:c.sub('<li id="{id}" class="{cname_node} {sel_prefix}-{selected}"><div class="{toggle}"></div><div class="{icon}"></div><div class="{selection}"></div><div class="{content}">{label}</div><ul class="{cname_children}">{children}</ul></li>',g),NOT_SELECTED:d,PARTIALLY_SELECTED:e,FULLY_SELECTED:f,ATTRS:{selected:{value:d,validator:function(j){return j===d||j===f||j===e;}},propagateUp:{value:true,validator:c.isBoolean},propagateDown:{value:true,validator:c.isBoolean}}});},"gallery-2012.10.03-20-02",{requires:["gallery-flyweight-tree","widget","base-build"],skinnable:true});