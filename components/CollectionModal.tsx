import { collection } from '@/data/collection';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { setIsWatchCollection } from '@/lib/store/features/uiSlice';
import React from 'react'
import { Button } from '@/components/ui/button';
import { selectSelectedCollection, setSelectedCollection } from '@/lib/store/features/collectionSlice';
import { resetButton } from '@/lib/store/features/buttonSlice';

export default function CollectionModal() {
  const dispatch = useAppDispatch();
  const selectedCollectionId = useAppSelector(selectSelectedCollection);

  const handleCollectionClick = (collectionId: string) => {
    dispatch(setSelectedCollection(collectionId));

    dispatch(setIsWatchCollection(false));
    dispatch(resetButton());
  };

  return (
    <div 
      className="relative"
      onClick={() => dispatch(setIsWatchCollection(false))}
    >
      <div className="fixed inset-0 bg-[#d1d1d2]/60 dark:bg-[#1d1d1f]/80 z-40"/>
      <div 
        className='absolute top-full left-1/2 -translate-x-1/2 -mt-4 w-80 h-[180px] bg-white dark:bg-black rounded-2xl shadow-lg z-50 transform transition-all duration-200 ease-in-out opacity-100 translate-y-0'
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="p-2">
          {collection.map((item) => {
              return (
                <li 
                className='relative w-full text-center py-2.5 tracking-tight'
                onClick={() => handleCollectionClick(item.id)}
                key={item.id}
              >
                <Button
                  variant={item.id === selectedCollectionId ? 'selected' : 'unselected'}
                  size={'modal'}
                  key={item.id}
                >
                  {item.name}
                </Button>
                {
                  item.id !== collection[collection.length - 1].id && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-black/10 dark:bg-white/10" />
                  )
                }
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
