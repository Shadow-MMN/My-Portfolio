const viewMore = document.getElementById('view-more')
const blogFour = document.getElementById('blog-four')
const blogFive = document.getElementById('blog-five')
const blogSix = document.getElementById('blog-six')

viewMore.addEventListener('click',function(){
    viewMore.style.display = 'none'
    blogFour.style.display = 'block'
    blogFive.style.display = 'block'
    blogSix.style.display = 'block'
})