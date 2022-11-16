import React from "react";

export default function GraphicFormEn(){
    return (
        <div className="container-fluid" id="g-form">
            <div className="row">
                <h4 className=" text-center" style={{fontSize:'6vh'}}>استبيان لطلب شعار و هوية بصرية</h4>
            </div>
           <div className="f-holder mt-5">
           <div className="form-body">
                <form>
                    <div className="form-group mb-3">
                        <label className="form-label">الاسم :</label>
                        <input className="form-control" type='text' placeholder="Full name" />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">رقم للتواصل :</label>
                        <input className="form-control" type='text' placeholder="ًwhatsapp Number" />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">اسم المشروع باللغتين العربية والانجليزية</label>
                        <input className="form-control" type='text' placeholder="name of project" />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">نبذة عن المشروع</label>
                        <textarea rows='2' className="form-control" type='text' placeholder="about project" ></textarea>
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">الشعار اللفظي (slogan)</label>
                        <textarea rows='2' className="form-control" type='text' placeholder="Slogan" ></textarea>
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">خدمات و منتجات المشروع</label>
                        <textarea rows='2' className="form-control" type='text' placeholder="projects Services and products" ></textarea>
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-label">نقاط قوة المشروع و مايميزه</label>
                        <textarea rows='2' className="form-control" type='text' placeholder="strenth points for the Project " ></textarea>
                    </div>
                   <div className="form-group mb-3">
                   <label className="form-label">الجنس المستهدف</label>
                    <div className="form-check">
                        <input type="radio" className="form-check-input  mx-3" id="radio1" name="optradio" value="option1" />
                        <label className="form-check-label" for="radio1">رجال</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input  mx-3" id="radio2" name="optradio" value="option2" />
                        <label className="form-check-label" for="radio2">نساء</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input  mx-3" id="radio3" name="optradio" value='option3' />
                        <label className="form-check-label">الكل</label>
                    </div>
                   </div>
                   <div className="form-group mb-3">
                    <label className="form-label">الفئة العمرية</label>
                    <div className="form-check">
                        <input className="form-check-input mx-3" type='radio' name="age" value='l12' />
                        <label className="form-check-label" >اقل من 12</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input mx-3" type='radio' name="age" value='f12to20' />
                        <label className="form-check-label" >بين 12-20</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input mx-3" type='radio' name="age" value='f21to35' />
                        <label className="form-check-label" >بين 21-35</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input mx-3" type='radio' name="age" value='f36to45' />
                        <label className="form-check-label" >بن 36-45</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input mx-3" type='radio' name="age" value='u46' />
                        <label className="form-check-label" >فوق 46</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input mx-3" type='radio' name="age" value='other' />
                        <label className="form-check-label" >اخرى</label>
                        <input className="fcontrol" type='text' style={{width:'50%'}}  />
                    </div>
                   </div>
                </form>
            </div>
           </div>
        </div>
    )
}