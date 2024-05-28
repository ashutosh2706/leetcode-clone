import { CircleCheckBig, ThumbsUp, ThumbsDown, Star, Target } from "lucide-react"
import { Tooltip } from "antd"

interface DescriptionProps {
    status: string; // solved, attempted
}

export default function Description() {
    return (
        <div className='flex px-2 py-4 h-[calc(100vh-105px)] overflow-y-auto'>
            <div className='px-5 w-full'>
                {/* Problem heading */}
                <div className='w-full'>
                    <div className='flex space-x-4'>
                        <div className='flex-1 mr-2 text-xl text-white font-medium'>1. Two Sum</div>
                    </div>
                    <div className='flex items-center mt-3'>
                        <div className={`text-olive bg-olive inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}>
                            Easy
                        </div>
                        <div className='rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-green-s'>
                            <Tooltip title="Attempted">
                                <Target className="w-5 h-5 stroke-yellow-400" />
                            </Tooltip>
                        </div>
                        <Tooltip title="Like">
                            <div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-dark-gray-6'>
                                <ThumbsUp className="w-5 h-5" />
                                <span className='text-xs'>120</span>
                            </div>
                        </Tooltip>
                        <Tooltip title="Dislike">
                            <div className='flex items-center cursor-pointer hover:bg-dark-fill-3 space-x-1 rounded p-[3px]  ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6'>
                                <ThumbsDown className="w-5 h-5" />
                                <span className='text-xs'>2</span>
                            </div>
                        </Tooltip>
                        <Tooltip title="Favourite">
                            <div className='cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 '>
                                <Star className="w-5 h-5" />
                            </div>
                        </Tooltip>
                    </div>

                    {/* Problem Statement(paragraphs) */}
                    <div className='text-white text-sm w-full'>
                        <p className='mt-3'>
                            Given an array of integers <code>nums</code> and an integer <code>target</code>, return&nbsp;
                            <em>indices of the two numbers such that they add up to</em> <code>target</code>. Ignore this, just added to check wrapping of long problem statements!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis alias similique dolor quia explicabo soluta
                        </p>
                        <p className='mt-3'>
                            You may assume that each input would have <strong>exactly one solution</strong>, and you
                            may not use the same element twice.Ignore this, just added to check wrapping of long problem statements!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis alias similique dolor quia explicabo soluta
                        </p>
                        <p className='mt-3'>You can return the answer in any order.</p>
                    </div>

                    {/* Examples */}
                    <div className='mt-4'>
                        {/* Example 1 */}
                        <div>
                            <p className='font-medium text-white '>Example 1: </p>
                            <div className='example-card w-full'>
                                <pre>
                                    <strong className='text-white'>Input: </strong> nums = [2,7,11,15], target = 9{" "}
                                    <br />
                                    <strong>Output:</strong> [0,1] <br />
                                    <strong>Explanation:</strong>Because nums[0] + nums[1] == 9, we return [0, 1].
                                </pre>
                            </div>
                        </div>

                        {/* Example 2 */}
                        <div>
                            <p className='font-medium text-white '>Example 2: </p>
                            <div className='example-card w-full'>
                                <pre>
                                    <strong className='text-white'>Input: </strong> nums = [3,2,4], target = 6{" "}
                                    <br />
                                    <strong>Output:</strong> [1,2] <br />
                                    <strong>Explanation:</strong>Because nums[1] + nums[2] == 6, we return [1, 2].
                                </pre>
                            </div>
                        </div>
                        {/* Example 3 */}
                        <div>
                            <p className='font-medium text-white '>Example 3: </p>
                            <div className='example-card w-full'>
                                <pre>
                                    <strong className='text-white'>Input: </strong> nums = [3,3], target = 6
                                    <br />
                                    <strong>Output:</strong> [0,1] <br />
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Constraints */}
                    <div className='my-5'>
                        <div className='text-white text-sm font-medium'>Constraints:</div>
                        <ul className='text-white ml-5 list-disc'>
                            <li className='mt-2'>
                                <code className="text-sm">2 ≤ nums.length ≤ 10^4</code>
                            </li>

                            <li className='mt-2'>
                                <code className="text-sm">-10^9 ≤ nums[i] ≤ 10^9</code>
                            </li>
                            <li className='mt-2'>
                                <code className="text-sm">-10^9 ≤ target ≤ 10^9</code>
                            </li>
                            <li className='mt-2 text-sm'>
                                <span className="text-sm">Only one valid answer exists.</span>
                            </li>
                            <li className='mt-2 text-sm'>
                                <span className="text-sm">Only one valid answer exists.</span>
                            </li>
                            <li className='mt-2 text-sm'>
                                <span className="text-sm">Only one valid answer exists.</span>
                            </li>
                            <li className='mt-2 text-sm'>
                                <span className="text-sm">Only one valid answer exists.</span>
                            </li>
                            <li className='mt-2 text-sm'>
                                <span className="text-sm">Only one valid answer exists.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}