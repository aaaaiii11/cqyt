import React from 'react';
import './App.css'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  width:'100%',
  height:'60px',
  backgroundColor:'#fff',
  padding:'0px',
  display:'flex',
  justifyContent:'space-between',
};
const layoutStyle = {
  width:'100%',
  headerBg:'blue'
};
const App = () => (
    <Layout style={layoutStyle}>
      <Header  className='top'style={headerStyle}>
      <div className='left-top'>
        <div className='left-logo'>
          <a>
            <img class='logo' src='https://xgxt.cqytxy.edu.cn/static/img/header-big-logo.abda9d48.jpg'></img>
          </a>
        </div>
        <div className='left-text'>
          <span>乐教、乐学、创造、创业</span>
        </div>
      </div>
      <div className='right-top'>
        <div className='right-text'>
          <img class='right-inform' src='data:image/jpeg;base64,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'>
          </img>
          <span >甘登元</span>
          <svg width="16" height="16" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" data-v-0a69be45=""><path fill="currentColor" d="M831.872 340.864L512 652.672 192.128 340.864a30.592 30.592 0 00-42.752 0 29.12 29.12 0 000 41.6L489.664 714.24a32 32 0 0044.672 0l340.288-331.712a29.12 29.12 0 000-41.728 30.592 30.592 0 00-42.752 0z"></path></svg>
        </div>
      </div>
      </Header>
      <Layout>
        <Sider width='180px' className='sider'>
        <div class='sider-meun'>
          <div class='list-meun'>
            <button style={{marginTop:20,backgroundColor:'#605be5'}} class='list-btn'><img style={{marginLeft:-32}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAAuVJREFUaEPtmUvoTVEUxn9fXiWljDA0FGUgjzEx9BhQBt6JEfrnnyjkEX+kGJG8ByJ5DJGpmIikTBhihKIQ+rR0lf659+59zznXobNGd/Dttda3v7XXPntd8Z+b/nN+NAT/dYUbBRsFa74DTYnWXKCu6TUKdt2iRIDtFcB2wMAhSZcTlxaCVa6g7RHAEWDrsEyPAYOSvhdi0GVxpQRtTwCuAPPb5HEXWC7pXVUkKyNoexpwC5jSJfkXwCJJz6ogWQlB20uAi8C4xKQ/ACsl3UzEJ8NKJWg7/O0CdkP2h3w0nz3APknxuxQrjaDtUCtUC/WK2HVglaSPRZz8WlsKQdtxzuK8xbkrw54CiyW9LOqsMEHb84CrQHTMMu0tsEzSvSJOCxG0vQU4CsRdV4XFHTkg6XivznsiaHsMcCrOSq+BM9edBzZK+pK5LrvTYXsyEI1gdm6wgviHwFJJr3L8ZCloO0jdACblBCkR+7pF8kGqz2SCtlcDJ4Eoz79pUaabJJ1LSaIrQdsjW41kc4rDPmJOtBrQt04xUwgeBrb1MfGcUEckDRYlGHU/MSdqH7FvJHXsBykK3gYW9DHpnFB3JC0sqmDsULzE5wAzgNE5GVSAjSbzGIhrIyYDUWFtrauCv6+0PRW4D4yvIPEUl++BuZKep4ADk0UwFtg+DaxPDVAy7qSkTTk+eyE4FLOUnCAlYg9K2pHjryE4fLdsNwrmlFAmtinR4RvWjzMY91U8rz4NCz42XgbArAwVa6fgE2CmpD9+ELc+5B8B0xNJ1o7gkKT4CmprtmPkMfCvEtwrKWaknQgeAFLvttop2BC0vR/YWacS3dCaqKXkFBPqmHZ3KtG1wJkUZ8A6SWcTsT9hvVwT8Vy6FP8IdZjPfAauAWvaddBfSdoeBVxojfzbzXvCXwy7Vkv6WinBHOd1wGYrWIekc3JoCObsVh2xjYJ1VCUnp0bBnN2qI7ZRsI6q5OTUKJizW3XE/gDHKuk5gFi9VAAAAABJRU5ErkJggg=='>
            </img>
            <span style={{color:'#fff'}}>首页</span>
            </button>
          </div>
          <div class='list-meun'>
            <button class='list-btn'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAABS5JREFUaEPtmV1sFFUUx//nzuxSYoNaUEFFXHa3fkVqYbvbbRFjiAYTX/RBH4wxMZpAVMBqVAK1VkSNSaGBkEg08YFEH0x8UYOJMSqh7e6wfBRtIvvRgjQkIoKUr5bducdMy2BT+3Fnd7asZPdx9pz/+f/uuXNn7lzCNf6ja5wPZcD/e4fLHSx3sMRHoDxF3WhQ177kPaZJLQSsALNJoG+9GlpDoWDGDf3JNIrawc6eY1XywtA7kLwKgD7aCBFfAot2rYo31QeDA8UCLQogM+tdicxKlrKVQVVTjPAfJLT10ZDvMyKSboO6DhhLpB7NmdgC4F4nZolwAOC1jeHq3U7ypop1DTAez1TnSLYx4/Gpik72vwC+JK/+RrTWd6QQHTu3YMBEInP9RZZvC+ZXmMnjhimABlmgbZa38oOamrnnC9HMG5CZta5E5gXJvBGMmwoxMWEu8XFBYl005N9JRJxPjbwAY4n0wzlTtgO0KJ+iTnOIeK/OtCYSCXY5znWSkEgcmTcoc9vB/ISTPNdiCZ9XiOvWhEK3nlTVVO5grDt1uzmIHxkIqIoXI44Iv2IGLW+sCZxQ0VcG7DBSXxe6QqoYUokRoB0NkcBKlVhlwD3x5FmAKlVEix1DQH9jJDhfpY4DwFReq5iKiXxilkaCSt6VgiwDe+ITABKfFyRaIXmeBK0CuCIfw1dyiIY0YAcDxyTLlolmzfQBCtq2tC6w2jLYsb93AefMj8B4Ki9Ioq88M/TXIzV39ln5nUa6XTKvGU9r+gCJj5OuNzQuXnjUNtJhJJcB1M6MWkXQbk1gbbQu+JMdP/JIysbAuOPqAg5X57OaoA/nztE3+3y+weErzCJm9D0vYW5i4OZxQQl/CtCGaJ3/U3sn0dPD3oFzvS+bJJvBuGGiAZq+Do52QPhdsFgXDS/8wn61iqVSs+RpambI1czktcKJOCsgtnoEbQyF/GdsiS4j+aQJsqa4f6rOXx3Ay66IYAiipmhdoMM2GjuQCeayso0A0jyiqb7Wn/p3SmfqmLkN4AenArP/v6qAtglr66NVeN60F42x5g0jPf8S+H0CPcPMyiu6pVMSgMNAREOCsdWr+deHQpS1LvX0nKg8dWHgLSHRxOCZql0bHVc6gJddzZrprVq0aMFpC+7vc2fSDNySD1hJTdHRADZgPN4/O4uLyruB0lpFJ2lJGdDhfC3Ze7A8RRU7We6g/dKhOGDYE09fLGQr5O4iQ4NLIwGl56fy20OHkfqZGctUB2RsnJuARNjdGA4+pOJFGdAwkg9kGT9MddYwUVG3AAl8ykNYHg5XH3QV0BKL7z9ck8uJncy4X0Xc7Qc9EX7RdflsZPFd3ar1lTtoC1pftGNG74smmRvBNEe1kNAp2LAkkO48ePg2OST6VfNG3mf5pMZac3144SdEZDrJdQxoizs+kyDs0oi2mYynwfyciklr3yiJts0k8e7ofaNKrh2TN6At4Nap0ljTRPhGZ/FaJOJPOgH6j04hyaNzY3uTj+SYtoBxX0GahB6d+NX6uurvC9Jx+hxUKTZy4tS3kjnXykyzVXKuTCXiv4j0lmjI97HT+2yyOgVP0fHEDx06euO5wWyLZH5p7Nn8OPE5QbS9ssLTau0XnQyKSmxRAO3CnYm+u6XMbQbjsXHNEHYJoTc1hHy/qZjNJ6aogFdAjfQKyfwegCWXr+0TRBsawoHv8jHtJGdaAG1DHd3p4e+jqkdfTkAmip1WQDcMO9UoAzodsVKLL3ew1Dri1E+5g05HrNTi/wE+EztXVU59lQAAAABJRU5ErkJggg=='>
            </img>
            <span>功能列表</span>
            </button>
          </div>
          < div class='list-meun'>
            <button class='list-btn'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAABLFJREFUaEPtWU1oXFUU/s6dn6Q/AVO1atXaNDNTIZbW5M1MZiabgiBYUaSCWnAh4k7FaENjXBsa21hFl10ISquLLgS7ELG4aGYymae0SLCZedMJVavUn5GatE0y7x55KS8mU5P30wx5DjMwq/fdc77vnnvPPedeQp3/qM71oSHw/x7hRgQbEfT4DDSWqMcDZEmvEUHLKbIBUNXJe2b1Sq8k3gemLSC+JJhOBn3+o4qy7RcbJlxDahrBUqnU/Otl/Q0dsh+gjTez5CkfxKG7N/uG29rarrtWscLAmgkcyWnPMvMQGFstiRMuEtHBVDT0qSXWIWDVBaZzEzHJ4j0wEg65AISMIPlaMrpjzPHYZQasmsDRc4X7KjM4RKD9zOzaLhExg4/7m9DfvSv8060KdU3EdKyql9bPyumDDBxgxvpbJWSOJ8JVAo4ExYYhRdly1a1d1wKNKGXU4vMseZCBe90SsBpHwM8kaCChtH9sRNcKX/3dlUBVLW6dkfIEM5JOHbrFEyHdJMRzitJ+0YkNxwLT4z9u4qlr3zJomxNHq4El8CRtXNeV7Lj/T7v2nAsc0w5L5gN2HSzgiCcAMv5lwbhDEu+0dYRUORJER5KxUJ9d/44FnsnmLwDUZtNBBYKOCYHhZFdIqx6TUQudrONNCTxt0x4ALvXEI9vt4l0I1CoA+ywdGOUY8VN2zrRMrvCELvkTgFos7YL0nnjIb427gXAhsGCZyYj4jyAhFo1GLtglkslpKcnyNDMFrcb0xMO2edsGmk7PZG0I9PHjKSVyajHR0VzhyTmmvQIckaB8gPhUdzT8+WJMJlfs1aV819sCCd/0xMJ7TJLj4xwsT2vHwdh3E3HCydYNof0dHTRrfFNVDszohbxVhl7TCPqIXkjEQh+ZYkay2tsMHlguKgQaTMVDb9nFG7g1FdjsEw+Yh3GhUGi6XOa/mSmwrEDiuc2t1BIOh2cMTCaXf0SX9NVKy3TNBBqlVJNob1IUmjMIzncWUmSt9pQQMm5m27RaelDqlR88KdAgddcmNJvRyH43sWtuTpy1EhgIyN3xzh3nDNxITnuIJX/vWYH+oIh0P9xeMAgys39krFD+727elMBTqVi4lYgq8wLV/F7W6QvPChSCXklGQx+aBNM57WUp+YPlCFfjM2Pa+zrzq54VCMLZVDTUabY2821VThuUTH1LKyDSBfHhRDQ0YGLPn/+t5fcrfxXBuNO7AgH44HspEd9+bDHJtFrcCcmP6kDEB+Qh6Muk0r5kr6Wz2jsSbFlIr1kW/VcQXff7eU93V3jUKsGY3zNjpWck9BN2rjtqLNB2sT3tQ+DFRKzts5VEGoLSueLrzBiyVcTXvth21C5BAKeFkMO33ya+No8PQ7Cx38pXph7TUekHY7fdSNe8XUq7bHgJdA3gSRDK80mEeNtKFc6yWbfWDW/dX1ncqPrr+NJpof6o52vDxftj4eKXqY/B6+wni5WRa37xW02vbq/uq4Vm1Hxcl3TU7eOLT3BvQolYtlh2V4rjOxm7huv2+WzxBNT1A+jSRFSnT9h2l3MtcTXbg7Uk7cR2Q6CT2fIithFBL0bFCadGBJ3MlhexjQh6MSpOOP0D5FZBV73odWAAAAAASUVORK5CYII='>
            </img>
            <span>个人设置</span>
            </button> 
          </div>
          <div class='list-meun'>
            <button class='list-btn'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAAAXNSR0IArs4c6QAAA+1JREFUaEPtWV9oW2UcPee7Sbq1slXphhS7NU0vjoW1uOXeNmmnvviiOHxwe5OBUwQfBuqLOOiLe57ii0MEEV+U+SDuRcQ9iE1LmhKsWO2SdE43VPA/1q1tlvuTzEW72j/fd3MLabl5CznnfOf8znfvl5sQW/zFLZ4PYcDN3nDYYNhgk08g3KJNXtC69sIG1x1RkwPCBpcXVCh81zlfWRzx4KUB7gcQ0S2RpCciMxaRUy3Rlwf6u7/R5frFGTWYnSw+IlW+A+BOvwv+x5M5KvX0kNP7buNaqytoB6w1d62y8GUw4f4xRPC6FWP/4H2J0kaF1A44liuf9SDPBG1EAecyA/axoHXretoBR3PFKYB9QRshcHVowO4KWtdHwFLF5IZiYrhjZ/uOfft2/WnC0cUaNFgSXVFT3I7tsbv6+vb+ZsrTwYcB61MazYUN6uyYFTGbc4sSPxEoECh7pLdW+m1sfTGV6rxWx4zlZ5/0PO+konor7fS8RtL39R/4NVg7vEmMpJ3EKySrfmrN5kpXBLjnFvfjGCPHXTf+ox+tQAPWJk3g4Yzb+5EfM0uu919v+8ZE+dkiT6Qd+0NT3UADgnh92LWfrZnITV2OVxcqJz1wj7kp71ERRv/HUzyr7m55PtPVdV1XM9CAingw49qfZqfKu2XBm4awQ9eILo7A11HiqOva0zqcwALWHoXa2xLbk0kujuUvnfC86ps6BvxgSBSGXPuQDjewgLXFtlnRzlSq+4dsvvS4eDinY8AXhjg/7NpHdLiBBrSII2nXPj85KdH56uwFQA7rmDDBKPKNmGp9bumxshY/0IAgskNO7/23ntyt8fzsQwBWvckQWPF88yCviqB1qXFSfqFST2VSvR+YDCTYgAAs8vSgkxhp5HAezZWWHRP8pDUSO37w4J7vTcLVsIEHvClKuaAUTnXs5Oe2bS+YmhqdKM5AeC8pi4B6KeMkzvgd2IYErAcipQLht1hlK9ZxLZZyUqnEH/X3ucLF/hsV65gVUe8NHur5wnRAt21tXXL4NKE7qRVwm/NpwiBwGNBgWMuh+jeZieIchG0NrLUitXZmdu6y2uLx+HzQ2obHRPEzgMMbYOKr4QE7uQG6NyW1GxzPlU9VIaeDNiIKZw479gtB6/57VOkKT09L7Pe/ypMiOKDLWQ9HyOX2O9oPJJO759bD+v1cu8HaAtnCpb24UX1bBA/4XXDJl4B8jJEnHKfnYqNaa/GNAtaERITjE8XHACsNYL9QtP8+E2FVlMxEJDIx6HS/7/c3G5OBGAc0EW8GbBiwGVpoxEPYYCPTawZu2GAztNCIh7DBRqbXDNywwWZooREPW77BvwEvN1NI5skemgAAAABJRU5ErkJggg=='>
            </img>
            <span>退出登录</span>
            </button>
          </div>
        </div>
        </Sider>
        <Content className='contentStyle'>
          <div  class='header'>
          <div className='list-right'>
          <div class='list-right_oneAll'>
            <div class='list-box'>
              <div class='list-box-box'>
                <div class='list-right_1_1'>
                  <div class='right_11_img'>
                    <img class='edu-img' src='data:image/jpeg;base64,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'>
                    </img>
                    <div class='edu'>
                      普通本科
                    </div>
                  </div>
                  <div class='right_11_text'>                         
                      <span class='name'>甘登元</span>
                      <div class='num'>
                          <div class='key'>学号</div>
                          <div class='value'>2022211278</div>
                      </div>
                      <div class='sex'>
                          <div class='key'>性别</div>
                          <div class='value'>男</div>
                      </div>
                      <div class='label'>
                          <div class='key'>政治面貌</div>
                          <div class='value'>群众</div>
                      </div>
                      <div class='age'>
                          <div class='key'>年龄</div>
                          <div class='value'>22</div>
                      </div>
                  </div>
                </div>
                <div class='list-right_1_2'>
                    <div  class='right_1_2_left'>
                      <div class='1_2_left'>
                          <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAABEdJREFUSEuVVltsVFUUXfvcmVIplcYWagRNGgX6acEG1JCGmP4TW4zhg8RYDCVtNQV5U+nDAm1TEQo1Un8wISQU5csE0RLDB02alJCIMhSFWEqiyRTK9ME87tnmnNt75947M51h/9zHOWevvfbrbEIOMtAfq0iYxmYBuRHACga9oo4J8CMGJgTEdRjm5br6vJvZ1NFCG745nahFQnaAaI3exwwQWU/1CUApsL70ewgkDu1oCgxm0psW8OwpLoubsfPM2LCwxTacVw0RDQeNwNbtjXTffz4F8ExvvIrBl5i52M8gm7vc60QUFqCanc3B3zz/3R8ne+NVkPIqMwcdJzmOy+BE13oKX6I4BFU3uUAdhqe6ucyU8RFAambpxK8wqwd0yEXYEMHKxs8t9zqAvcdiN5ilL2bZVGYzwVonMoab9+W97QD2dEZrmeXFFFa+rHQyVGXqcwqR2LL7wKJBfbKr/dkdBlup75OPPlmEZctzA7g3JvHDhahVOj4hUGjP4fxyOto2UwEWo2kNZuCdqgBKSgglywSWlxL+eSAxPWNF+cVCwsrXBB6OSzx9yhi/L3Fz1PQUpifnSK6ljiNzrcRosQAzx2z9uwG8Vx3Ehe+j+PsvqXevKTdQ82EefrwYw5+3TVcbsBl69TFRG3W0zA2xlJu0BruLzLuEmVH6soG31htY+apiKDAWMhGJWOYtLSK8/obQBow/MDE6ktDsyc5FX04R0TVqPTgbAnh1WoIE7GjM10C5yB+/mxhUMXSS3+cxprv0xX5lr1iSSeGRzsW5YOk9jx9LnOiacxiyKgkQ1FOJEDRNh/cmAZULiQjqaUv78QLn3TQZ//3Ldu+GMIDSUtJnNOCkxFddcy4D/XUqI3Rwz3SIJbRLfSHUwF92J8n/eiWOoV+iDoBaf/+DfKyrDDiAPUdnM7sUuEsHdk0PMVgnTbo67+xJAobDErdvmQ5Dw2C8uS6IJYVJht2dCtAWL0NiXKO9uyKtbLIuC9vf7iw71psxvCmxnZyUON4+44Kz4mfrE4Q22tc8U2Gapi58P0P1b39LAV4qzi1L742Z+Pb0rOMBf4gMw1irfbG7KXKHObW1KQNWrQ5gU3UeFmdJ1qkpxs8/RTHxUDUAS+wEVE8iCvWcLCzXgJ/tjNQCqc07NYk8E0aKSxfeL7acOFNoNW8ln9ZP3WDmDd6y8AV9fpyxe7O/jNyMrBBZZQZg+Ov+pcnrSf1paJgro0RshCUXJxUuzCiFou+HhiIKczCvsq/vBe8FrNbqt0eqCOZVOCPGwiozMXIaB1GcYVT3ny105pqUi0uDSvMSg4vTZa3XhDSD4vyNQ6AwDKPGDWaVXhppqHtSFk/I8wz/mJhbTME8HAyIrX0DRdnHRDd+3bYnKns71NWXLV7z6yFAHBo4V/R8g7Bf+cfbZioEP9ssQRsBXgG2Rn0QPwJoQoCvS8q//N25gqyj/v9bjP3Zu7h1TgAAAABJRU5ErkJggg=='
                          ></img>
                          <span class='while'>我的班级</span>
                          <span class='black'>2022级计算机科学与技术11班</span>
                      </div>
                    </div>
                    <div class='right_1_2_right'>
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAABC5JREFUSEudlltsFFUYx3/fzE63RlCTjcaIGGoC5cGXJcHURIIloCkKKVKIoOHN+GhMqiYKJlxiIqLhwQvh0geioBaxRsAq0oLVtEqiIV5giUhjAiFi00h5YDsz5zOzs9vdmdlL8bycuZzz/3+X/3fOJ0xj3HlsMiue3+moLppEZjlwT7DNhctN6CVXZEhTdt/V5U0/N4KTegvu7st3/atmmyO0ButuAM3FOXhPqeKJFOZgKJK7XayNVzrTh2rhVif8RFuwbxwAbatrsQgEZMFcYCw+KyP4zetZKxfj+5OEh93FGPMpmExgMwRLQg/Kz3GC0v9KeBnDTq3mSedU5GvEgoDM9Y4jOFU9m/KgSBD3MLFJXFL2skrSsodBGL0bp7EkUwhNwaFYyOKAjQwo4Fhj2E0LS+EtEx7MD6MNctZIgjWVIiOsSz9USgoczHfha29ifTyFKcBUpPRmDLBlDevSh0IP9+fPgbYmRFEUzdxbleGOJjK3CEdHDU8MudOkKgmuQJNjQ3q+cHAyS978VA/h2TkWuxeHOjpy0bDiWy9c3ix8lLWYmRa2nPH5YdyU814NMG0tEHrymxFei9ZRtAyenm3zwdIgnnD4D8PqoofPz7XZ+XD4fVW/S98VrVGXJTx7i7BvcgA17VVVWVKhrXz/qMO9M4QNgx6n/gkBnrvfYtcjIWH7Fy4n/w4SXDkiIQ28HxT25HMo8+omxS7+DfZXiiYF3yxxGM8ra056SQnEQZXzwvv5CSxm1CI80eGwZHa5enyjvDpieOMXH9Lw4G3lfz+OK3glaQeIcZlb14X3JicQDQlVQII8hCBvt1m8kC25Vzapf1Tp+M7j2lqHmU3l7x/nlKcG6ylYJoR38zmQqiHN3iXsb7d5IBM9cr8cVXrOGno7ksY885XPhxeKuYw7iJ4X3vEGUA1FkziqoOM+4djKUBilceyisves4fDyKOGJv5Slgz5M1DjshUFhp7sZ0bAsEkN4bA70xwn/VPacNXz2eJRQely4XvtyQWWL8JZmsbxi4SdiwLI5wtedUQ+PXlB2/274fEWMcJ8HE3X0blILwuTscM9RvNXjy9tbhIFVUeAjF5RdvxmOrIwR7nXhWo37U8nR7cwvEnpdGNNbtZDugO5WK2LHr+NK/1VD97wo4Y4zJuxDSssD7QTPhTm1hm4pHt4B3HZ3GENb5IKPuxs7OBo1BFP/YYSXnYrrKQB+U1vwvdMYMgXSanX7fwxAxkjZC3kx7G+iBbZdF+P6x1Gt3mIkCGs1UVMdg4tjL+Mlmeprkk3U6xo2UaqZhN7idVrPAJExLGs1r5TJkh6WALZqC8Y/kGg5ptvjBDmz7PVsmk6bWGn1Vu3CN9vQoBuochbHRSSSw7Y2sklushGOh2qTZsHrRGQRqrMQq9Dqo+YyIpdQHYJUH1ulYav/H0X4xF37a1SlAAAAAElFTkSuQmCC'></img>
                          <span class='while'>班级总人数</span>
                          <span class='black'>37</span>
                    </div>
                </div>
                <div class='list-right_1_3'>
                  <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAAAXNSR0IArs4c6QAAAdpJREFUOE+Vk7uLE1EUxr9zYxZZFzcPEUQLxYAKdiK+kHQ229iIRSaSZEKInf+AsNjZroWCmURJplu2WCsLCwsfxQpbLDa+QLaxyIwRIm4ycz+5mx0Yo4nklvc753cefEcw5ZWLfh6aj1pu5kw8bHmZ6utH/yGFa6129rnRZBKnUvTqIFZIJltu9o+4+q2fR3f0rw0BDib2zV15/GRh8y9QrcZk0PdXCNajIuMg828XvbMkNgBsOu30JSkVeucF4akoSQRVkvl4pwY0GsdrkOply00/NXrJ6t4T4i6VLEnF8vok56ftyoDulJj6EfivSOQSSOQb7uLbmtU/EmBnG0BHyoUup0GMFo1WLX4/Eerws4habXbSN4xWsfx3gD4wE2iU6L0nMNfqZHJ7oDWC12YHFbxPBAaRJWzLW9fA1ZlA1ULvYojgjVJoOu2sHXUIIJSy5X8D9eH/LXs3qeC9BnBaKXWu0U59sa1eTjP4QKUeiG0zI8P+sQikw8HtuIfiy66X/OPDoZx03NSLkZe6jtaoSCJ5+Z/Ojrs6Dop3bVveEoF1oTxz3PT1iSdi7kw0Vgl9aNzZe7e2BWJRYf+Fhju/PRFkqptRBgHvNzuZm+M73B0z5ILTzmwZ7Tei7euzHBywxwAAAABJRU5ErkJggg=='
                  ></img>
                  <div class='tip'>
                  今天是你进入XXX大学的第 988 天，距离你毕业还有≈ 472 天 
                  </div>
                </div>
              </div>
            </div>
          <div class='box-rowAll'>
                <div class='box-row'>
                  <img  src='data:image/png;base64,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'
                  ></img>
                  <div class='box-text'>
                    <span class='box-text-left'>登录次数</span>
                    <span class='box-text-right'>25</span> 
                  </div>
                </div>
                <div class='box-row'>
                  <img src='data:image/png;base64,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'>
                  </img>
                  <div class='box-text'>
                    <span class='box-text-left'>申请跟踪</span>
                    <span class='box-text-right'>0</span>
                  </div>
                </div>
                <div class='box-row'>
                  <img  src='data:image/png;base64,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'
                  ></img>
                  <div class='box-text'>
                    <span class='box-text-left'>待申请</span>
                    <span class='box-text-right'>1</span>
                  </div>
                </div>
          </div>
          </div>
        </div>
          <div class='list-right'>
            <div class='list-right-right'>
                <div class='list-right-box'>
                  <div class='title'>
                    <div class='title-right'>
                    <span class='title-name'>速办通道</span>
                    </div>
                    <div class='btn'>设置</div>
                  </div> 
                  <div class='app-all'>
                    <div class='app'>
                      <img src='https://xgxt.cqytxy.edu.cn/resource/icon/test.png'
                      ></img>
                      <span class='app-name'>公寓信箱</span>
                    </div>
                    <div class='app'>
                      <img src='https://xgxt.cqytxy.edu.cn/resource/icon/archives.png'
                      ></img>
                      <span class='app-name'>宿舍管理</span>
                    </div>
                    <div class='app'>
                      <img src='https://xgxt.cqytxy.edu.cn/resource/icon/staff.png'
                      ></img>
                      <span class='app-name'>辅导员考核</span>
                    </div>
                    <div class='app'>
                      <img src='https://xgxt.cqytxy.edu.cn/resource/icon/leave.png'
                      ></img>
                      <span class='app-name'>请销假申请</span>
                    </div>
                    <div class='app'>
                      <img src='https://xgxt.cqytxy.edu.cn/resource/icon/test.png'
                      ></img>
                      <span class='app-name'>处长信箱</span>
                    </div>
                    <div class='app'>
                      <img src='https://xgxt.cqytxy.edu.cn/resource/icon/staff.png'
                      ></img>
                      <span class='app-name'>家庭困难学生</span>
                    </div>
                    <div class='app'>
                      <img src='https://xgxt.cqytxy.edu.cn/resource/icon/notice.png'
                      ></img>
                      <span class='app-name'>通告公知</span>
                    </div>
                    <div class='app'>
                      <img src='https://xgxt.cqytxy.edu.cn/resource/icon/difficult.png'
                      ></img>
                      <span class='app-name'>特许群特学生</span>
                    </div>
                  </div>
                </div>
            </div>
            <div class='list-right-left'>

            </div>
          </div>
          <div class='list-right'>

          </div>
          <div class='list-right'>

          </div>
          </div>
        </Content>
      </Layout>
      <Footer >Footer</Footer>
    </Layout>
);
export default App;