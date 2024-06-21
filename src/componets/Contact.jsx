import React from 'react'
import {FaPhoneVolume} from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";


const Contact = () => {
  return (
    <>
 
      <div className="container con">
              <div className="row">
                  <div className="col md-6">
                     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia cupiditate exercitationem suscipit facilis porro consequatur quibusdam maiores quam necessitatibus veritatis a beatae libero, qui nihil nostrum pariatur. Illum pariatur molestias, eligendi fugiat commodi veniam at asperiores earum aliquid accusamus esse, corporis quo id. Iste eaque harum molestiae? Praesentium magni vitae architecto quas molestias dolorem illo adipisci non, perspiciatis beatae totam in quam quis necessitatibus ducimus repudiandae blanditiis dicta accusamus doloremque optio aliquid dolore rem quidem. Placeat, corporis. Cum minima modi voluptate adipisci! Quas numquam nobis repudiandae architecto distinctio atque velit explicabo deleniti aliquid laboriosam sint autem, provident dignissimos ut esse enim mollitia quibusdam nihil voluptatem? Vitae laudantium debitis dolor soluta adipisci autem nisi magni eaque ratione optio, ad delectus assumenda repudiandae officiis modi quia molestias, quidem repellat quas iure aperiam numquam nobis! Exercitationem, similique iusto neque nihil molestiae earum officiis possimus culpa iure animi nesciunt adipisci a ex ducimus odit quam vel autem quod harum molestias consectetur odio minus aliquid voluptate? Rerum, voluptates aut? A accusantium nostrum repellendus nesciunt, ad quasi blanditiis facilis sit deleniti amet, libero odio. Accusamus optio rem quod quisquam alias velit quo fuga temporibus animi sunt harum sint nemo ipsa reiciendis provident amet quos, reprehenderit voluptatibus labore quae quis enim quibusdam qui? Iure temporibus sed rem repudiandae non architecto deserunt accusamus, autem aut nisi atque similique consectetur nemo delectus, vitae mollitia harum soluta deleniti perspiciatis nihil fugiat nostrum itaque. Molestiae consectetur nemo eaque, sed cum cupiditate temporibus quos culpa eligendi? Inventore veniam sequi cum! Quas, ratione.</p>
    <table>
        <thead className='text-center'>
            <tr>
                 <th className='bg-warning text-center'>               ---Contact details                 </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><FaPhoneVolume/></td>
                <td>Phone:</td>
                <td>789-546-5265</td>
            </tr>
            <tr>
                <td><IoMdPhonePortrait /></td>
                <td>Coll:</td>
                <td>7895465265</td>
            </tr>
            <tr>
                <td><MdOutlineEmail /></td>
                <td>Email:</td>
                <td>help@url.com</td>
            </tr>
        </tbody>
     </table>

                  </div>
                    <div className="col md-6">
                        <img src="images/farmhouse.jpg" alt="" style={{height:'100%', width:'100%'}}/>
                    </div>
              </div>
      </div>
    </>
  )
}

export default Contact
