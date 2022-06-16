import React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'

const Header = () => {
    const data = useStaticQuery(
        graphql`
            query{
                site{
                    siteMetadata{
                        title
                        description
                    }
                }
            }
        `
    )

    return (
        <header>
            <div >
                <p>
                    <Link to='/'>{data.site.siteMetadata.title}</Link>
                </p>
                <p>
                    {data.site.siteMetadata.description}
                </p>
            </div>

            <nav >

                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                        <Link to='/blog/'>Blog</Link>
                    </li>

                    <li>
                        <Link to='/contact/'>Contatos</Link>
                    </li>

                    <li>
                        <Link to='about/'>Sobre</Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default Header