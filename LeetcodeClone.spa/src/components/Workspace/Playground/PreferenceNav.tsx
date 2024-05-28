import { Settings, Expand, ChevronDown } from "lucide-react"
import { Tooltip } from "antd"
import { Dispatch, SetStateAction, useState } from "react"
import EditorPrefs from "../../../types/editorPrefs";

interface PreferenceNavProps {
    editorPrefs: EditorPrefs;
    setEditorPrefs: Dispatch<SetStateAction<EditorPrefs>>;
}


export default function PreferenceNav({ editorPrefs, setEditorPrefs }: PreferenceNavProps) {

    const [selectedLang, setSelectedLang] = useState('C++');
    const [showDropdown, setShowDropdown] = useState(false);

    const handleLanguageChange = (lang: string): void => {
        setSelectedLang(lang);
        setShowDropdown(!showDropdown);
    }

    

    return (
        <div className='flex items-center justify-between bg-dark-layer-2 h-11 w-full'>
            <div className='flex items-center text-white relative'>
                <button className='flex cursor-pointer items-center rounded focus:outline-none bg-dark-fill-3 text-dark-label-2 hover:bg-dark-fill-2  px-2 py-1.5 font-medium'
                    onClick={() => setShowDropdown(!showDropdown)}>
                    <div className='flex items-center justify-center px-1'>
                        <div className='text-xs text-label-2 dark:text-dark-label-2'>{selectedLang}</div>
                        <ChevronDown className="ms-1 h-4 w-4" />
                    </div>
                </button>
                {showDropdown && (
                    <div className="absolute z-10 bg-dark-layer-1 top-8">
                        <button
                            className="w-full px-3 py-2 text-sm text-dark-label-2 hover:bg-dark-fill-2 rounded-sm"
                            onClick={() => handleLanguageChange('C++')}>
                            C++
                        </button>
                        <button
                            className="w-full px-3 py-2 text-sm text-dark-label-2 hover:bg-dark-fill-2 rounded-sm"
                            onClick={() => handleLanguageChange('Java')}>
                            Java
                        </button>
                        <button
                            className="w-full px-3 py-2 text-sm text-dark-label-2 hover:bg-dark-fill-2 rounded-sm"
                            onClick={() => handleLanguageChange('Python')}>
                            Python
                        </button>
                        <button
                            className="w-full px-3 py-2 text-sm text-dark-label-2 hover:bg-dark-fill-2 rounded-sm"
                            onClick={() => handleLanguageChange('JavaScript')}>
                            JavaScript
                        </button>
                    </div>
                )}
            </div>

            <div className='flex items-center m-2 me-5 gap-5'>
                <div className="h-5 w-5 text-dark-gray-7 font-bold text-lg cursor-pointer">
                    <Tooltip title="Settings" color={"gray"} placement="bottom" arrow={false}>
                        <Settings className="h-5 w-5" />
                    </Tooltip>
                </div>
                <div className="h-5 w-5 text-dark-gray-7 font-bold text-lg cursor-pointer">
                    <Tooltip title="Fullscreen" color={"gray"} placement="bottom" arrow={false}>
                        <Expand className="w-5 h-5" />
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}