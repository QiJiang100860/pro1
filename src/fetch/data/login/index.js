import {post} from '../../post.js';

export function getLnztData() {
    const result = post('/edu/lnztList')
    return result
}