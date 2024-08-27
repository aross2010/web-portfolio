'use client'
import { TimelineElement } from '@/app/lib/types'
import Image from 'next/image'
import { ArcherContainer, ArcherElement } from 'react-archer'

type TimelineProps = {
  data: TimelineElement[]
}

export default function Timeline({ data }: TimelineProps) {
  return (
    <ArcherContainer
      endMarker={false}
      strokeColor="#E5A823"
      strokeWidth={2}
    >
      <div className="flex flex-col items-center">
        {data.map(({ title, subtitle, description, dates, image, gpa }, i) => {
          return (
            <div
              key={subtitle}
              className={`flex items-start w-full relative ${
                i !== 0 ? '-mt-12' : ''
              }`}
            >
              <ArcherElement
                id={i == 0 ? 'root' : `element ${i}`}
                relations={
                  i == data.length - 1
                    ? []
                    : [
                        {
                          targetId: `element ${i + 1}`,
                          targetAnchor: 'top',
                          sourceAnchor: 'bottom',
                        },
                      ]
                }
              >
                <div className="h-20 w-20 shadow-lg shadow-slate-800 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center p-2 border-2 border-sjsu-gold rounded-full">
                  <Image
                    src={image}
                    alt={subtitle}
                    className="object-cover rounded-full object-center"
                  />
                </div>
              </ArcherElement>
              <div
                className={`p-4 bg-slate-600/50 rounded-lg flex flex-col w-[340px] shadow-md shadow-slate-800 ${
                  i % 2 == 0 ? 'ml-12' : 'mr-12 ml-auto'
                } `}
              >
                {/* {i % 2 == 0 ? (
                  <FaCaretLeft className="text-slate-600/50 absolute top-4 -left-[19px] z-10 text-4xl " />
                ) : (
                  <FaCaretRight className="text-slate-600/50 absolute top-4 -right-[19px] z-10 text-4xl " />
                )} */}

                <h4 className="text-gray-400 mb-4">{dates}</h4>
                <h2 className="font-semibold text-lg">{title}</h2>
                <h3 className="text-gray-400 mb-2">
                  {subtitle}
                  {gpa && `, ${gpa} GPA`}
                </h3>
                <p className="text-gray-400">{description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </ArcherContainer>
  )
}
