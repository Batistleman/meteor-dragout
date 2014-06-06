#meteor-dragout

Adds the dragout event to meteor

##Source

Thanks dancork:

https://github.com/dancork/jquery.event.dragout

##Usage

    Template.item.rendered = function(){
      $(id).on('dragout', function(e) {
    
        // .. 
        // It could be a good idea to add {{_id}} to your template, this way out can call:
        console.log(this.id);
    
      });
    };

