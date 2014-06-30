define(['can/util/string', 'can/component', 'mustache!./users'], function(can, Component, initView){

  return can.Component({
    tag : 'users',
    template : initView,
    scope : {

    }
  })

});