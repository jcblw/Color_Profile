    (function($){
        
        var data = color_form,
            storage = data.data,
            current = data.current,
            colorNum,
            validateColorData = function(){
                
                var missing = [];
                
                //Loop through all sections
                for(var i = 0; i < data.sections.length; i += 1){
                    //Loop through all questions
                    for(var p = 0; p < data.sections[i].questions.length; p += 1){
                        if(typeof storage[i] === 'undefined'|| typeof storage[i][p] === 'undefined'){
                            missing.push([i,p]);
                        }
                    }
                }
                
                return missing;
            }
            storeData = function(x, y, z){
                if(typeof storage[x] === 'undefined'){
                    storage[x] = [];
                }
                
                        
                
                storage[x][y] = z;
            },
            build = {
                events : function(){
                    $('.color_preview').bind('click', function(){
                        
                        $('.color_preview').each(function(){
                            
                            $(this).removeClass('focus');
                            
                        });
                        
                        var rel = $(this).attr('rel');
                        
                        current = rel;
                        

                        $(this).addClass('focus'); 
                        
                        //cue(0);
                        
                    });
                    
                    $('.next_contact').bind('click', function(){
                    
                        build.contact();    
                        
                    });
                    
                },
                contact : function(){
                    
                    var inputs = [];
                    
                    inputs.push('<ul class="color_form">')
                    
                    for(var i =0; i < data.contact.length; i += 1){
                        
                        var contactData = data.contact[i];
                            input = '<li><span class="lFloat">' + contactData.name + '</span><input  class="rFloat" type="' + contactData.type + '" name="' + contactData.name + '"/><div class="clear"></div></li>';
                            
                            inputs.push(input);
                        
                    }
                    
                    inputs.push('</ul><a class="button" href="#submit>Send Color</a>"');
                    
                    $('.color_wrp').html(inputs.join(''));
                    
                },
                questions : function(){

                    var question = [];
                    
                    for(var i = 0; i < data.sections.length; i += 1){
                        
                        //Create Seperate List
                        question.push('<h3>' + data.sections[i].title + '</h3>');
                        question.push('<ul>');
                        
                        //Loop through all questions
                        for(var p = 0; p < data.sections[i].questions.length; p += 1){

                          var  temp = '<li class="lFloat col_third">\
                                     <div class="overview_question lFloat">'+data.sections[i].questions[p]+'</div>\
                                     <div class="color_preview rFloat" rel="'+ i + '-' + p+'"></div>\
                                     </li>'; 
                                
                            question.push(temp);
                        }
                        
                        question.push('<br class="clear" /></ul>');
                    }
                    
                    $('.color_wrp').html('<h2>Choose Your Color</h2>\
                                         <ul class="overview">' + question.join('') + '</ul>\
                    <div class="clear"></div>\
                    <div class="next_contact">Looks Good</div>');
                    
                    build.events();
                    
                }
                
            };
            
            build.questions();
        
            
      
      // Attach Event to clicking on Zoomy
        $('.zoom')
            .zoomy('hover', {border: '20px solid #fff', zoomSize: 150, glare : false, clickable: true})
            .bind('click', function(){
                
                var curParse = current.split('-');
                
                curParse = [curParse[0], curParse[1]];

                $('.color_preview.focus').css('background', '#' + color_form.colors[ZoomyS.currentColor])                
                
                storeData(curParse[0], curParse[1], ZoomyS.currentColor);
                
                
                return false;    
            });


    
    }(jQuery));