        // Step 1 : Add EventListener to the "Post Your Comment" Button
        document.getElementById ("post-button").addEventListener("click", function(){
            // Step 2 : Get the Comment Inside the Text-Area 
            const CommentBox = document.getElementById ("new-comment");
            const newComment = CommentBox.value;
            // Step 3 : Set the Comment Inside the Comment Container
            /*
            i. Get the Comment Container
            ii. Create a new Element (p)
            iii. Set the Text of the comment as innerText of the p tag
            iv. Add the p tag using appendChild
            */
            const commentContainer = document.getElementById ("comment-container");
            const p = document.createElement ("p");
            p.innerText = newComment;
            commentContainer.appendChild (p);
            // Step 4 : Clear the Text Area
            CommentBox.value = "";
            })