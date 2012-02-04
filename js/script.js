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
            storeData = function(x, y){
                if(typeof storage[x] === 'undefined'){
                    storage[x] = [];
                }
                
                var ele = $('.color_select'),
                        val = ele.find('option:selected').val();
                        
                
                storage[x][y] = parseFloat(val);
            }
            bindPreview = function(){
                $('.color_select').bind('change', function(){
            
                   // console.log('change color');  
                
                    var ele = $(this),
                    val = ele.find('option:selected').val(),
                    rel = ele.attr('rel'),
                    curParse = rel.split('-'),
                    color;
                    
                    curParse = [parseFloat(curParse[0]), parseFloat(curParse[1])];                    
                    
                    colorNum = val;
                    
                    val = parseFloat(val) - 1;
                
                    color = '#' + color_form.colors[val];
                    
                    $('.color_preview[rel=' + rel +']').css({background: color});
                    
                    storeData(curParse[0], curParse[1]);
                    
                });
            },
            showQuestion = function(x, y){
                
                
                $('.color_question').html(data.sections[x].questions[y]);
               
               
               /* TODO make a check to see if there is data stored for this question
                 *===========================================
                 * If the data is found the the form shows data represented as if it was reselected
                 * 
                 *
                */
               var selected = false, value, calc
                template_form = function(){
                    
                    
                    if(typeof storage[x] !== 'undefined' && typeof storage[x][y] !== 'undefined'){
                        selected = true;
                        value = storage[x][y];
                    }else{
                        selected = false;
                    }
                    
                    calc = (selected) ? '' : 'selected' 
                    
                    var options = ['<option value=" null " ' + calc + '>Please Choose a Number</option>'];
                    
                    for(var i = 0; i < data.colors.length; i += 1){
                        var num = i + 1;
                        
                        calc = (selected && num === value) ? 'selected' : '';
                        //console.log(num);
                        options.push('<option value="' + num + '"' + calc + '>' + num + '</option>');
                    }
                    
                    
                    
                    return options.join('');
                },
                
                select = '<select class="color_select" rel="'+current+'">' + template_form() + '</select><div class="color_preview" rel="'+current+'"></div>';
                
                $('.color_form').html(select);
                
                
                if(selected){
                        
                        color = '#' + color_form.colors[value - 1];
                        $('.color_preview[rel=' + current +']').css({background: color});
                        
                }
                
                bindPreview();
                
                
            },
            showErrors = function(msg){
               $('.color_errors').html(msg); 
            },
            showTitle = function(x){
                $('.color_title').html(data.sections[x].title);
            },
            cue = function(x){
                
                if(x !== undefined){
                    var curParse = current.split('-'), cur;
                            curParse = [parseFloat(curParse[0]), parseFloat(curParse[1])];
                    
                    
                    if(x === 0){
                        if(typeof data.sections[curParse[0]].questions[curParse[1] + 1] === 'string'){
                            cur = [curParse[0],  curParse[1] + 1];
                            
                            //console.log(curParse[0]);
                        }
                        else{
                           if(typeof data.sections[curParse[0] + 1] === 'object' && typeof data.sections[curParse[0] + 1].questions[0] === 'string'){
                                cur = [curParse[0] + 1,  0];
                           }
                           else{
                                //Show Information Form
                                var errors = validateColorData();
                                
                                if(errors.length < 1){
                                    console.log('overview');
                                    showErrors('')
                                    return false;
                                }else{
                                    cur = [errors[0][0], errors[0][1]];
                                    console.log('Errors found');
                                    showErrors('Please Fillout Missing Colors');
                                }
                           }
                        }
                        
                    }
                    else{
                        if(typeof data.sections[curParse[0]].questions[curParse[1] - 1] === 'string'){
                            cur = [curParse[0],  curParse[1] - 1];
                            
                            //console.log(curParse[0]);
                        }
                        else{
                           if(typeof data.sections[curParse[0] - 1] === 'object' && typeof data.sections[curParse[0] - 1].questions[data.sections[curParse[0] - 1].questions.length - 1] === 'string'){
                                cur = [curParse[0] - 1,  data.sections[curParse[0] - 1].questions.length - 1 ];
                           }
                           else{
                                //Show Information Form
                                alert('cannot go back further');
                                return false;
                           }
                        }
                        
                    }
                }else{
                    cur = [0,0];
                }
                
                //console.log({x : x, cur: cur});   
                
                current = cur[0] + '-' + cur[1];
                
                if(cur[1] === 0 || x === 1){
                    showTitle(cur[0]);
                }
                
                showQuestion(cur[0] , cur[1]);
                
                $('.color_current').html('Question : ' + (cur[0] + 1) + ' - ' + (cur[1] + 1));
                
                return true;
            
                
            }
            
            if(current === null){
                current = '0-0';
                cue(undefined);
            }
        
            
         $('.color_next').bind('click', function(){
        
            cue(0);
            
        });
         
         $('.color_back').bind('click', function(){
        
            cue(1);    
            
        });
         
      
      
        $('.zoom')
            .zoomy('hover', {border: '20px solid #fff', zoomSize: 150, glare : false, clickable: true})
            .bind('click', function(){
                var selected, rel,
                    select = $('.color_select'),
                    curParse = current.split('-');
                    
                    curParse = [parseFloat(curParse[0]), parseFloat(curParse[1])];     
                    
                select.find('option').each(function(i){
                    $(this).attr('selected', false);
                    if(i === ZoomyS.currentColor){
                        selected = i;
                    }
                });
                
                rel = select.attr('rel');
                
                select.val(''+ (selected + 1)).siblings('.color_preview').css('background', '#' + color_form.colors[selected]);
                //console.log(selected);
                
                storeData(curParse[0], curParse[1]);
                
                
                return false;    
            });


    
    }(jQuery));