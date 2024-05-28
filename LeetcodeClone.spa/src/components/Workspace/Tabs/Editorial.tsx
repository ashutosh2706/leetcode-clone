export default function Editorial() {

    return (
        <div className="flex px-2 py-4 h-[calc(100vh-44px)] overflow-y-auto">
            <div className="px-5">
                <div className="w-full">
                    <div className="flex space-x-4">
                        <div className='flex-1 mr-2 text-xl text-white font-medium'>Editorial</div>
                    </div>
                </div>
                <div className='text-white mt-5'>
                <p className='mt-3 text-base'>
                    A simple implementation uses two iterations. In the first iteration, we add each element's value as a key and its index as a value to the hash table. Then, in the second iteration, we check if each element's complement <code>(target - nums[i])</code> exists in the hash table. If it does exist, we return current element's index and its complement's index. Beware that the complement must not be <code>nums[i]</code> itself!
                </p>
                <div className='flex-1 mr-2 mt-10 text-lg text-white font-medium'>Implementation</div>
                {/* will complete this later */}
            </div>
            </div>
        </div>
    )
}