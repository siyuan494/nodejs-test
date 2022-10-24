import './css/style.css'
import $ from 'jquery'
$(function(){
    $('li:odd').css('backgroundColor','green');//odd偶数
    $('li:even').css('backgroundColor','pink');//even奇数
})