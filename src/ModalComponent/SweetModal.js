import React, {Component} from 'react';
import Swal from 'sweetalert2';
class SweetModal extends Component{

    htmlCode = "<>";
    componentDidMount(){
        setTimeout(()=>{
            Swal.fire({
                icon:"question",
                title:'찾고 계신 상품이 없으신가요?',
                customClass: 'swal',
                html:
                    "<div><h4>저희는 이러한 상품 서비스들이 있어요!</h3></div>" +
                    "<div class='tags'>" +
                    "<div class='broker-tag'><a href='https://enterprise.kt.com/pd/P_PD_AI_RB_004.do' class='tag-link'>AI서비스로봇</div>"+
                    "&nbsp;&nbsp;"+
                    "<div class='broker-tag'><a href='https://enterprise.kt.com/pd/P_PD_CC_TE_005.do' class='tag-link'>링고비즈</div>"+
                    "&nbsp;&nbsp;"+
                    "<div class='broker-tag'><a href='https://enterprise.kt.com/pd/P_PD_SS_SF_001.do' class='tag-link'>SafeMate 소방안전</div>"+
                    "&nbsp;&nbsp;"+
                    "<div class='broker-tag'><a href='https://enterprise.kt.com/pd/P_PD_AI_RB_004.do' class='tag-link'>AI방역로봇</div>"+
                    "&nbsp;&nbsp;"+
                    "<div class='broker-tag'><a href='https://enterprise.kt.com/pd/P_PD_NW_GI_003.do' class='tag-link'>오피스넷</div>"+
                    "&nbsp;&nbsp;"+
                    "</div>",
                showConfirmButton:false,
                showCancelButton:true,
                showCloseButton:true,
                background: '#fff',
                cancelButtonColor:'#4331de',
                cancelButtonText:'닫기',
            });}
        ,2000);
    }
    

    render(){
        return(
            <></>
        )
    }
}

export default SweetModal;
