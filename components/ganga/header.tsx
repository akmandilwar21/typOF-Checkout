import Image from 'next/image'

export default function Header(prop:any) {
  const header = prop.prop;
  const header_color = {
    backgroundColor: header.lpm.data.header_module.head_bg ?? "#ffffff"
  }
  return (
    <header className="header">
      <div className="header-bottom sticky-header" style={header_color} >
        <div className="container">
          <div className="header-left">
            <button className="mobile-menu-toggler">
                <span className="sr-only">Toggle mobile menu</span>
                <i className="icon-bars"></i>
            </button>
            <a href="/" className="logo">
                {
                header.store.logo?
                <Image src={header.store.logo} alt="Logo" id="top_logo" width="100" height="60" />
                : <Image src="https://d1yvcml1qpeqwy.cloudfront.net/logo.png" alt="Logo" width="60" height="60"/>
                }
            </a>
        </div>
        <div className="header-center">
            <nav className="main-nav"> 
                <ul className="menu">
                    {
                        header.header_navbar? 
                        header.header_navbar.map((category: any, index: any) => {
                         return (category.category_name != "Special") ? 
                            <li key={index}>
                                <a href="/sc/{category.slug}">{category.category_name}</a>

                                {
                                category.category_name.checkproductbysubcategory ? 
                                <ul>
                                    {
                                    category.category_name.checkproductbysubcategory.map((scat: any, ind: any) => {
                                      return (
                                        <li key={ind}>
                                            <a  href="/sc/{category.slug}/{scat}">
                                            {scat}
                                            </a>
                                        </li>
                                      )
                                    })
                                    }
                                </ul>:""
                                }
                            </li> : ""
                        }) : ""
                    }
                </ul>
            </nav>
        </div>
        </div>
      </div>

  </header>
  )
}
