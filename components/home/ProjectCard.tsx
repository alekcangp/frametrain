'use client'
import NextImage from 'next/image'
import NextLink from 'next/link'

export default function ProjectCard({
    frame,
}: { frame: { id: string; name: string; currentMonthCalls: number } }) {
    const { id, name, currentMonthCalls } = frame
    return (
        <NextLink
            href={`/frame/${id}`}
            style={{ textDecoration: 'none' }}
            className="w-[320px] bg-[#0B0D0E] p-5  border-[#32383E] border rounded-lg hover:drop-shadow-2xl"
            key={id}
        >
            <div className="flex flex-row gap-5 justify-center w-full h-full">
                <NextImage
                    src={`${process.env.NEXT_PUBLIC_CDN_HOST}/frames/${id}/preview.png`}
                    alt={name}
                    width={90}
                    height={90}
                    className="object-cover rounded-md"
                    onError={(e) => {
                        e.currentTarget.srcset = ''
                        e.currentTarget.src =
                            'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgMTI0IDEyNCIgZmlsbD0ibm9uZSI+CjxyZWN0IHdpZHRoPSIxMjQiIGhlaWdodD0iMTI0IiByeD0iMjQiIGZpbGw9IiNGOTczMTYiLz4KPHBhdGggZD0iTTE5LjM3NSAzNi43ODE4VjEwMC42MjVDMTkuMzc1IDEwMi44MzQgMjEuMTY1OSAxMDQuNjI1IDIzLjM3NSAxMDQuNjI1SDg3LjIxODFDOTAuNzgxOCAxMDQuNjI1IDkyLjU2NjQgMTAwLjMxNiA5MC4wNDY2IDk3Ljc5NjZMMjYuMjAzNCAzMy45NTM0QzIzLjY4MzYgMzEuNDMzNiAxOS4zNzUgMzMuMjE4MiAxOS4zNzUgMzYuNzgxOFoiIGZpbGw9IndoaXRlIi8+CjxjaXJjbGUgY3g9IjYzLjIxMDkiIGN5PSIzNy41MzkxIiByPSIxOC4xNjQxIiBmaWxsPSJibGFjayIvPgo8cmVjdCBvcGFjaXR5PSIwLjQiIHg9IjgxLjEzMjgiIHk9IjgwLjcxOTgiIHdpZHRoPSIxNy41Njg3IiBoZWlnaHQ9IjE3LjM4NzYiIHJ4PSI0IiB0cmFuc2Zvcm09InJvdGF0ZSgtNDUgODEuMTMyOCA4MC43MTk4KSIgZmlsbD0iI0ZEQkE3NCIvPgo8L3N2Zz4='
                    }}
                />
                <div className="flex flex-col gap-4 items-start w-full h-full">
                    <h1 className="font-medium">{name}</h1>
                    <div className="px-2 py-1 text-xs font-medium rounded-full text-[#c7dff7] border border-[#12467B]">
                        {currentMonthCalls === 0 ? 'Not used yet' : `${currentMonthCalls} calls`}
                    </div>
                </div>
            </div>
        </NextLink>
    )
}
