import {ref} from 'vue'
import {defineStore} from 'pinia'
import {v4 as uuidv4} from 'uuid';

export const useForumStore = defineStore('forum', () => {
    const ideas = ref([]);

    function addIdea(newIdea) {
        const {timestamp, heading, text} = newIdea;
        const id = uuidv4();
        ideas.value.push({timestamp, heading, text, id, comments: []});
    }

    function addComment(newComment) {
        let {timestamp, text, commentOnID} = newComment;
        const id = uuidv4();
        const parentIdea = ideas.value.find(idea => idea.id === commentOnID);
        if (parentIdea) {
            // If the comment is a reply to an idea, add it to the comments array of the parent idea
            parentIdea.comments.push({timestamp, text, id, replies: []});
        } else {
            // If the comment is a reply to another comment, add it to the replies array of the parent comment
            for (let idea of ideas.value) {
                const parentComment = findComment(idea.comments, commentOnID);
                if (parentComment) {
                    parentComment.replies.push({timestamp, text, id, replies: []});
                    break;
                }
            }
        }
    }

    function findComment(comments, id) {
        for (let comment of comments) {
            if (comment.id === id) {
                return comment;
            } else if (comment.replies.length > 0) {
                const foundComment = findComment(comment.replies, id);
                if (foundComment) {
                    return foundComment;
                }
            }
        }
        return null;
    }

    return {ideas, addIdea, addComment};
})