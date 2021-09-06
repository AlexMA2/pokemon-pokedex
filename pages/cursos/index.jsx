import React from 'react'
import Link from 'next/link'
const index = () => {
    return (
        <div>
            Mira los nuevos cursos
            <Link href="/cursos/desarrolloweb">
                <a> Ver desarrolloweb </a>
            </Link>
            
        </div>
    )
}

export default index
