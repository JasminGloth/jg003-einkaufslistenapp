import items from '../data/items.json';

export const PageList = () => {
	return /*html*/`
<div class="page pageList">
	<h2>Einkaufsliste</h2>
	<p>Es gibt ${items.length} Items</p>
</div>
`; 
}