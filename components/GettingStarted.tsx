import React from 'react'
import { useDispatch } from 'react-redux'

import { setIsGettingStarted } from '@/lib/store/features/uiSlice'
import { Button } from '@/components/ui/button';

export default function GettingStarted() {
  const dispatch = useDispatch();

  return (
    <div className="absolute top-[17%] w-full z-10">
        <div className="max-w-screen-md px-0 sm:px-6 m-auto">
            <span className="text-[21px] pb-2.5 block font-text">
            Apple Watch Studio
            </span>

            <div className="flex flex-col text-[64px] leading-[68px] font-semibold font-display tracking-tighter text-[#1d1d1f] dark:text-white">
                <span>Choose a case.</span>
                <span>Pick a band.</span>
                <span>Create your own style.</span>
            </div>

            <div>
                <Button 
                  variant={'save'} 
                  size={'started'}
                  onClick={() => dispatch(setIsGettingStarted(false))}
                >
                  Get started
                </Button>
            </div>
      </div>
    </div>
  )
}
