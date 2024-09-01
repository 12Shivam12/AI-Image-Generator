import { surpriseMePrompts } from '../constant/index';
import FileSaver from 'file-saver'
export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() *
        surpriseMePrompts.length);
    const randomPromt = surpriseMePrompts[randomIndex];

    if(randomPromt === prompt) return getRandomPrompt(prompt);
}

export function downloadImage (_id,photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}