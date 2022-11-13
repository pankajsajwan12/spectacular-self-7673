import React from 'react';
import { useState,useEffect } from 'react';
import './Productspage.css';
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getProductsData } from "../Redux/AppReducer/action";
import BodyCareFilter from './BodyCareFilter';

const Bodycarepage = () => {

  // const [product, setproduct] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.AppReducer.products);
  const urlCategory = searchParams.getAll("category");
  const urlSort = searchParams.get("sortBy");
  const [category, setCategory] = useState(urlCategory || []);
  // const location = useLocation();
  const [sortBy, setSortBy] = useState( urlSort || "");

  
    useEffect(() => {
        if (category) {
          
    setSearchParams({ category: category});
          dispatch(getProductsData({params : {category}}));
        }
      }, [category, dispatch, setSearchParams]);

      useEffect(() => {
        if(sortBy)
        {
          const params ={
            category : searchParams.getAll("category"),
            sortBy,
          }
          const getproductsparams = {
            params : {
              category : searchParams.getAll("category"),
              _sort : "price",
              order : sortBy
            }
          }

          console.log(getproductsparams);
          setSearchParams(params)
          dispatch(getProductsData(getproductsparams))
          
        }
      }, [setSearchParams,dispatch, searchParams, sortBy])

      useEffect(() => {
        if(products.length === 0)
        {
          dispatch(getProductsData());
        }
      }, []);
    
      const handleChange = (e) => {
        const option = e.target.value;
    
        let newCategory = [...category];
        if (category.includes(option)) {
          newCategory.splice(newCategory.indexOf(option), 1);
        } else {
          newCategory.push(option);
        }
        setCategory(newCategory);
      };
      console.log(category)
    
      const handleSort = (e) => {
        setSortBy(e.target.value);
      };
      console.log(sortBy);
  
  return (
    <div className='bodycarepage'>
        Bodycarepage
        <div className='bodycarepagedispl'>
        <div className='bodycarepageleft'>
        <div className='homelocate'>
                <p className='homelocatein'>HOME  /  BODYCARE</p>
            </div>

            <div className='filtersortdiv'>
                 <div className='filterdiv'>
                    <p className='filterdivpara'>Filters</p>
                <div className='filterdivall'>
            
        <div className="filterdivin">
          <input
            type="checkbox"
            defaultChecked={category.includes(`Body Care`)}
            value="Body Care"
            onChange={handleChange}
          />
          <label  className='filterpara'>Body Care</label>
        </div>
        <div className="filterdivin">
          <input
            type="checkbox"
            defaultChecked={category.includes(`body cream`)}
            value="body cream"
            onChange={handleChange}
          />
          <label  className='filterpara'>Body Cream</label>
        </div>
        <div className="filterdivin">
          <input
            type="checkbox"
            defaultChecked={category.includes(`body oil`)}
            value="body oil"
            onChange={handleChange}
          />
          <label  className='filterpara'>Body Oil</label>
          </div>
          <div className="filterdivin">
          <input
            type="checkbox"
            defaultChecked={category.includes(`Body Lotion`)}
            value="Body Lotion"
            onChange={handleChange}
          />
          <label  className='filterpara'>Body Lotion</label>
          </div>
  </div>

  <p className='filterdivpara'>Sort</p>
        <div onChange={handleSort}>
          <div className="filterdivin">
            <input
              type="radio"
              name="sortBy"
              defaultChecked={sortBy === "asc"}
              value="asc"
            />
            <label className='filterpara'>Price low to high</label>
          </div>
          <div className="filterdivin">
            <input
              type="radio"
              name="sortBy"
              defaultChecked={sortBy === "desc"}
              value="desc"
            />
            <label className='filterpara'>Price high to low</label>
          </div>
        </div>
  </div>
            </div> 

            <div className='topoffers'>
                <p className='homeoffersin'>TOP OFFERS</p>
            </div>
            <div className='topofferslist'>
                <div className='topofferslistin'>
                    <p className='topofferslistinpara'>Buy 3, Get 1 FREE All Full-Size Body Care</p>
                </div>
                <div className='topofferslistin'>
                    <p className='topofferslistinpara'>2/$10, 4/$18, 6/$24 Shea Butter Cleansing Bars</p>
                </div>
                <div className='topofferslistin'>
                    <p className='topofferslistinpara'>Buy 3, Get 1 FREE Travel, Hand & Lip Care</p>
                </div>
            </div>
            
            <div className='topoffers'>
                <p className='homeoffersin'>BATH & SHOWER</p>
            </div>
            <div className='topofferslist'>
                <div className='topofferslistin'>
                    <p className='topofferslistinpara'>All Bath & Shower</p>
                </div>
                <div className='topofferslistin'>
                    <p className='topofferslistinpara'>Body Wash & Shower Gel</p>
                </div>
                <div className='topofferslistin'>
                    <p className='topofferslistinpara'>Body Scrub</p>
                </div>
            </div>

            <div className='topoffers'>
                <p className='homeoffersin'> MOISTURIZERS</p>
            </div>
            <div className='topofferslist'>
                <div className='topofferslistin'>
                    <p className='topofferslistinpara'>All Moisturizers</p>
                </div>
                <div className='topofferslistin'>
                    <p className='topofferslistinpara'>Body Lotion</p>
                </div>
                <div className='topofferslistin'>
                    <p className='topofferslistinpara'>Body Cream</p>
                </div>
            </div>

            <div className='topoffers'>
                <p className='homeoffersin'>FRAGRANCE</p>
            </div>
            <div className='topofferslist'>
                <div className='topofferslistin'>
                    <p className='topofferslistinpara'>All Fragrance</p>
                </div>
                <div className='topofferslistin'>
                    <p className='topofferslistinpara'>Body Sprays & Mists</p>
                </div>
                <div className='topofferslistin'>
                    <p className='topofferslistinpara'>Perfume & Cologne</p>
                </div>
            </div>

            <div className='topoffers'>
                <p className='homeoffersin'>NEW & NOW</p>
            </div>
            <div className='topofferslist'>
                <div className='topofferslistin'>
                    <p className='topofferslistinpara'>All Aromatherapy</p>
                </div>
            </div>

        </div>

        <div className='bodycarepageright'>

            <div className='bodycarepagerighttopdiv'>
            <div className='bodycarepagerighttopdivin'>
                    <div className='bodycarepagerighttopdivinimg'>
                        <img className='bodycarepagerighttopdivinimgin' src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-bbw-storefront-catalog-en/default/dwdd3f00d5/550tbcallin-v3_fa3_vn_0.jpg?yocs=o_s_" alt="" />
                    </div>
                    <div className='bodycarepagerighttopdivinname'>
                        <p className='bodycarepagerighttopdivinnamein'>All Bath & Shower</p>
                    </div>
                </div>

                <div className='bodycarepagerighttopdivin'>
                <div className='bodycarepagerighttopdivinimg'>
                        <img className='bodycarepagerighttopdivinimgin' src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-bbw-storefront-catalog-en/default/dw44b313af/obc_mens_sp2_vn.jpg?yocs=o_s_" alt="" />
                    </div>
                    <div className='bodycarepagerighttopdivinname'>
                        <p className='bodycarepagerighttopdivinnamein'>Body Wash & Shower</p>
                    </div>
                </div>

                <div className='bodycarepagerighttopdivin'>
                <div className='bodycarepagerighttopdivinimg'>
                        <img className='bodycarepagerighttopdivinimgin' src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-bbw-storefront-catalog-en/default/dw105022ca/bc_scrub_fa2_vn.jpg?yocs=o_s_" alt="" />
                    </div>
                    <div className='bodycarepagerighttopdivinname'>
                        <p className='bodycarepagerighttopdivinnamein'>Body Scrub</p>
                    </div>
                </div>

                <div className='bodycarepagerighttopdivin'>
                <div className='bodycarepagerighttopdivinimg'>
                        <img className='bodycarepagerighttopdivinimgin' src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-bbw-storefront-catalog-en/default/dw9e1822e5/550tbcallin-v4_fa3_vn_0.jpg?yocs=o_s_" alt="" />
                    </div>
                    <div className='bodycarepagerighttopdivinname'>
                        <p className='bodycarepagerighttopdivinnamein'>All Moisturizers</p>
                    </div>
                </div>

                <div className='bodycarepagerighttopdivin'>
                <div className='bodycarepagerighttopdivinimg'>
                        <img className='bodycarepagerighttopdivinimgin' src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.219/on/demandware.static/-/Sites-bbw-storefront-catalog-en/default/dwc10a5c94/obc_atviznav_0_sp1_vn.jpg?yocs=o_s_" alt="" />
                    </div>
                    <div className='bodycarepagerighttopdivinname'>
                        <p className='bodycarepagerighttopdivinnamein'>Body Lotion</p>
                    </div>
                </div>
            </div>

            <div className='allbodycare'>
                <h2 className='allbodycarein'>All Body Care</h2>
            </div>


            <div className='bodycareproductsdiv'>
                <div className='bodycareproducts1'>
                    
                        {
                            products.length>0 &&
                            products.map((prod)=>{
                                return(
                                <Link>
                                <div className='bodycareproductsinside'>
                                <div className='bodycareproductsinsideimg' key={prod.id}><img className='bodycareproductsinsideimgin' src={prod.productimageurl} alt="" /></div>
                                <div className='bodycareproductsinsidead' key={prod.id}><p className='bodycareproductsinsideadpara'>{prod.subcategory}</p></div>
                                <div className='bodycareproductsinsidename' key={prod.id}><p className='bodycareproductsinsidenamepara'>{prod.title}</p></div>
                                <div className='bodycareproductsinsidename' key={prod.id}><p className='bodycareproductsinsidesubtitlepara'>{prod.subtitle}</p></div>
                                <div className='bodycareproductsinsidetype' key={prod.id}><p className='bodycareproductsinsidetypein'>{prod.category}</p></div>
                                <div className='bodycareproductsinsideprice' key={prod.id}><p className='bodycareproductsinsidepricein'>$ {prod.price}</p></div>
                                <div className='bodycareproductsinsideaddtobag' key={prod.id}><button className='bodycareproductsinsideaddtobagbtn'>ADD TO BAG</button></div>
                                </div>
                                </Link>
                            );
                        })
                        }
</div>


            </div>

                

        </div>
      </div>
    </div>                             
  )
}

export default Bodycarepage;