
const FIX_SCROLL_POSITION = 25; // :D

// Calculate scroll position depending on leader's viewport and scroll position
export default function calculateScrollPosition(viewportHeight, position) {
    return position - (window.innerHeight / viewportHeight) - FIX_SCROLL_POSITION;
}
