/*                          TEXT BASIC FUNCTIONS */
function erase(){
    document.getElementById('txt').value = ''
    define_counters('')
}
function clear_txt(){
    if(document.getElementById('txt').value === 'Type your text!!!'){
        document.getElementById('txt').value = ''
        define_counters('')
    }
}
function paste(){
    navigator.clipboard.readText().then((text)=> {
        document.getElementById('txt').value = text
    });
}
function copy(){
    document.getElementById('txt').select()
    document.execCommand('copy')
    document.getSelection().removeAllRanges()
    document.getElementById('copied').style.display = 'block'
}
function hide(x){
    document.getElementById('' + x + '').style.display = 'none'
}
function define_counters($x){
    $words = $x.split(' ').length
    document.getElementById('word').innerHTML = '<p>Words: ' + $words + '</p>'
    $chars = $x.split('').length - $words + 1
    document.getElementById('char').innerHTML = '<p>Chars: ' + $chars + '</p>'
    if($x === ''){
        document.getElementById('word').innerHTML = '<p>Words: ' + 0 + '</p>'
        document.getElementById('char').innerHTML = '<p>Chars: ' + 0 + '</p>'
    }
}
/*                          TEXT ADVANCED OPTIONS FUNCTIONS*/
function correct(){
    $txt = document.getElementById('txt').value
    $txt_array = $txt.split(' ')
    for(i = 0;i < $txt_array.length;i++){
        if($txt_array[i] === ''){
            $txt_array.splice(i,1)
            i -= 1
        }
        if($txt_array[i] === '.' || $txt_array[i] === '!' || $txt_array[i] === '?' || $txt_array[i] === ','){
            $txt_array[i-1] = $txt_array[i-1] + $txt_array[i]
            $txt_array.splice(i,1)
        }
    }
    document.getElementById('txt').value = $txt_array.join(' ')
    $txt = document.getElementById('txt').value
    $txt_array = $txt.split('')
    for(i = 0;i < $txt_array.length;i++){
        if($txt_array[i] === '.' || $txt_array[i] === '!' || $txt_array[i] === '?' || $txt_array[i] === ','){
            if($txt_array[i+1] != ' '){
                $txt_array.splice(i+1, 0,' ')
                i += 1
            }
        }
    }
    document.getElementById('txt').value = $txt_array.join('')
    define_counters(document.getElementById('txt').value)
}
function upper(){
    document.getElementById('txt').value = document.getElementById('txt').value.toUpperCase()
}
function lower(){
    document.getElementById('txt').value = document.getElementById('txt').value.toLowerCase()
}
function cw(){
    document.getElementById('txt').value =  (document.getElementById('txt').value + '').replace(/^(.)|\s(.)/g, function ($1) {
        return $1.toUpperCase();    })
}
function cp(){
    var $text = document.getElementById('txt')
    var $text_array = $text.value.split('.')
    var $t = ''
    
/* para . */
    for(i = 0;i < $text_array.length; i++){
        $text_array[i] = no_space($text_array[i])
        $t = $t + $text_array[i].substring(0,1).toUpperCase() + $text_array[i].slice(1).toLowerCase() /* coloca só a primeira letra da frase maiuscula */
        if(i < ($text_array.length - 1)){
            $t = $t + '. ' /* ponto final e espaço */
        }
    }
    $text.value = $t

/* para ? */ 
    $text_array = $text.value.split("?")
    $t = ''
    for(i = 0; i < $text_array.length; i++){
        $text_array[i] = no_space($text_array[i])
        $t = $t + $text_array[i].substring(0,1).toUpperCase() + $text_array[i].slice(1)/*substring(0,1) primeira letra e sem o toLowerCase pois já foi feito no 'para . '*/
        if(i < ($text_array.length - 1)){
            $t = $t + '? ' /* ponto de interrogação e espaço */
        }
    }
    $text.value = $t

/* para ! */
    $text_array = $text.value.split("!")
    $t = ''
    for(i = 0; i < $text_array.length; i++){
        $text_array[i] = no_space($text_array[i])
        $t = $t + $text_array[i].substring(0,1).toUpperCase() + $text_array[i].slice(1)
        if(i < ($text_array.length - 1)){
            $t = $t + '! ' /* ponto de exclamação e espaço */
        }
    }
    $text.value = $t

    document.getElementById('txt').value = $t
}function no_space(str){
    return str.replace(/^[\s]+/g, '')
}

function revers(){
    $text = document.getElementById('txt').value
    document.getElementById('txt').value = $text.split('').reverse().join('')
}
function replace(rep, $for){
    document.getElementById('txt').value = document.getElementById('txt').value.replace(new RegExp(rep, 'g'), $for)
}
function AO(){
    if(document.getElementById('ao_display').style.display === 'block'){
        document.getElementById('ao_display').style.display = 'none'
        document.getElementById('ok').className = 'fa fa-sort-desc'
        document.getElementById('about').style.top = '68%'
    }else{
        document.getElementById('ao_display').style.display = 'block'
        document.getElementById('ok').className = 'fa fa-sort-asc'
        document.getElementById('about').style.top = '88%'
    }
}
function font_family(value){
    document.getElementById('txt').style.fontFamily = value
}
function font_size(size){
    document.getElementById('txt').style.fontSize = size + 'px'
}
function other($value){
    $text = document.getElementById('txt').value
    if($value === 'Aa'){
        $text_array = $text.split('')
        for(i = 0; i <$text_array.length; i++){
            if((i % 2) === 0){
                $text_array[i] = $text_array[i].toUpperCase()
            }else{
                $text_array[i] = $text_array[i].toLowerCase()
            }
        }
        document.getElementById('txt').value = $text_array.join('')
    }if($value === 'aA'){
        $text_array = $text.split('')
        for(i = 0; i <$text_array.length; i++){
            if((i % 2) === 1){
                $text_array[i] = $text_array[i].toUpperCase()
            }else{
                $text_array[i] = $text_array[i].toLowerCase()
            }
        }
        document.getElementById('txt').value = $text_array.join('')
    }
}