function jumptoLogin()
{


var msg=document.getElementById('msg').value;
var email=document.getElementById('email').value;
var StId=document.getElementById('StId').value;
var pwd=document.getElementById('pwd').value;
var Rigpwd=document.getElementById('Rigpwd').value;
    if(!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.com)+$/.test(email)){
        msg='你的邮箱真的符合基本法嘛？';
        alert(msg);
    }
    else if (!/^[0-9]{9}$/.test(StId)) {
        msg='你确定这是FZU学生的学号嘛'
        alert(msg);
        alert("指长度九位和全数字");
    }
    else if(/[019]/.test(pwd)){
        msg='嘿咻咻 鸡汤来咯（密码错咯）'
        alert(msg);
        alert("禁止0和1   还有无辜受害的9");
    }
    else if(!/.{9,15}/.test(pwd)){
        msg='嘿咻咻 鸡汤来咯（密码错咯）'
        alert(msg);
        alert("你的长度不对（狗头）");
    }
    else if(!/^.*[A-Z].*[A-Z].*[A-Z].*$/.test(pwd)){
        msg='嘿咻咻 鸡汤来咯（密码错咯）'
        alert(msg);
        alert("必须得有三人成虎（三个大写字母）");
    }
    else if(!/[#&*?]/.test(pwd)){
        msg='嘿咻咻 鸡汤来咯（密码错咯）'
        alert(msg);
        alert("{#,&,*,?}四大金刚任选其一或全都要");
    }
    else if(/(.)\1/.test(pwd)) {
        msg = '嘿咻咻 鸡汤来咯（密码错咯）'
        alert(msg);
        alert("禁止重复");
    }
    else if(pwd!=Rigpwd){
        msg='天皇陛下 龟野先生 我的密码 第二次错咯'
        alert(msg);
    }else{
        //搞个假的吧
        alert("恭喜你，朋友，你度过了层层考验，成功    没有登录");}
}