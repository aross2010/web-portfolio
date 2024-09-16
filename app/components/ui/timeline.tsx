'use client'
import { TimelineElement } from '@/app/lib/types'
import Image from 'next/image'
import { ArcherContainer, ArcherElement } from 'react-archer'
import { motion } from 'framer-motion'
import { Fragment } from 'react'
import { BsFillCaretLeftFill } from 'react-icons/bs'

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
      <ul className="flex flex-col items-center lg:gap-0 gap-12">
        {data.map(({ title, subtitle, description, dates, image, gpa }, i) => {
          const componentContent = (
            <Fragment>
              <h4 className="text-gray-400 mb-4">{dates}</h4>
              <h2 className="font-semibold text-lg">{title}</h2>
              <h3 className="text-gray-400 mb-2">
                {subtitle}
                {gpa && `, ${gpa} GPA`}
              </h3>
              <p className="text-gray-400">{description}</p>
            </Fragment>
          )

          return (
            <li
              key={subtitle}
              className={`flex items-start w-full relative ${
                i !== 0 ? 'lg:-mt-12' : ''
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
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="sm:h-20 sm:w-20 w-16 h-16 shadow-lg shadow-slate-800 absolute lg:left-1/2 transform lg:-translate-x-1/2 flex items-center justify-center p-2 border-2 border-sjsu-gold rounded-full"
                >
                  <Image
                    src={image}
                    alt={subtitle}
                    className="object-cover rounded-full object-center"
                  />
                </motion.div>
              </ArcherElement>

              <motion.div
                initial={{
                  opacity: 0,
                  x: i % 2 == 0 ? -25 : 25,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                viewport={{ once: true }}
                className={`p-4 relative bg-slate-700 rounded-lg lg:flex hidden flex-col lg:max-w-[340px] sm:max-w-[70%] shadow-md shadow-slate-800 sm:ml-32 ml-20 ${
                  i % 2 == 0 ? 'lg:ml-12' : 'lg:mr-12 lg:ml-auto'
                } `}
              >
                {componentContent}

                <BsFillCaretLeftFill
                  className={`text-slate-700 absolute top-0 mt-4 transform  h-10 w-10 ${
                    i % 2 !== 0
                      ? 'left-0 -translate-x-1/2'
                      : 'right-0 translate-x-1/2 rotate-180'
                  }`}
                />
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
                className={`p-4 relative bg-slate-700 rounded-lg lg:hidden flex flex-col lg:max-w-[340px] sm:max-w-[70%] shadow-md shadow-slate-800 sm:ml-32 ml-20 ${
                  i % 2 == 0 ? 'lg:ml-12' : 'lg:mr-12 lg:ml-auto'
                } `}
              >
                {componentContent}
                <BsFillCaretLeftFill
                  className={`text-slate-700 absolute top-0 mt-4 transform  h-10 w-10 left-0 -translate-x-1/2`}
                />
              </motion.div>
            </li>
          )
        })}
      </ul>
    </ArcherContainer>
  )
}
