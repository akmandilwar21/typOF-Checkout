import Link from "next/link";
import { useState } from "react";

function Category(){
    let cate_name='';
    let sub_cat='';
    let [category_detail,setCategory_Detail]=useState<any>([]);
    let [products,setProducts]=useState<any>([]);
    function addToWishlist(id:any){
        return
    }
    function addToCart(id:any){
        return
    }
    return(
        <>
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
                <div className="container">
                    <ol className="breadcrumb" id="bread">
                        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{cate_name ? cate_name: ''}</li>
                        
                        {sub_cat!=='not' &&
                        <li className="breadcrumb-item active" aria-current="page">{sub_cat ?sub_cat: ''}</li>}
                        
                    </ol>
                </div>
            </nav>
            <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                <div className="d-flex flex-column-fluid">
                    <div className="container mt-2">
                        <div className="row">
                            <div className="col-lg-9">
                                {category_detail.SubcategoryPoster && 
                                <div className="row">
                                    <div className="col-md-12 mb-4" style={{height: '250px',width: '100%',backgroundSize: 'cover',backgroundPosition: 'center center', backgroundImage: category_detail.pic??''}}>
                                    </div>
                                </div>
                                }
                                <div className="products mb-5">
                                    <div className="row " id="cat-page-loader">
                                        {products.length>0 && 
                                            products.map((product:any)=>{
                                                <div className="col-md-4">
                                                        <div className="product product-7">
                                                            <figure className="product-media">
                                                                {(product.available==0)&&
                                                                <span className="product-label label-out">Sold Out</span>}
                                                                
                                                                <Link href={"/p/"+product.slug} rel="noopener" target="_blank">
                                                                        <img src={product.images[0]} alt={product.product_name} className="product-image"/>
                                                                </Link>
                                                                <div className="product-action-vertical">
                                                                    <a href="javascript:void(0)"  onClick={()=>addToWishlist(product.product_id)} className="btn-product-icon btn-wishlist" id={"wish_btn_"+product.product_id}  title="Add to wishlist"></a>
                                                                </div>
                                                                
                                                                {product.is_saleable=='yes' && product.available>0 && 
                                                                <div className="product-action">
                                                                    <a href="javascript:void()" onClick={()=>addToCart(product.product_id)} className="btn-product btn-cart"><span>add to cart</span></a>
                                                                </div>}
                                                            </figure>
                                                            <div className="product-body">
                                                                <h3 className="product-title">
                                                                    <Link href={"/p/"+product.slug} rel="noopener" target="_blank">{product.product_name}</Link>
                                                                </h3>
                                                            </div>
                                                        </div>
                                                </div>
                                            }) }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category;