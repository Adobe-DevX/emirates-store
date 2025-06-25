export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
  //adding classname to columns inside columns block
  Array.from(block.children).forEach(child => {
    if (
      child.tagName === 'DIV' &&
      !child.className.trim() // no class at all
    ) {
      child.classList.add('individual-card');
    }
  });
  document.querySelectorAll('.individual-card div').forEach(card => {
    if (card.innerHTML.trim() === '') {
      card.style.boxShadow = 'none';
    }
  });
}
