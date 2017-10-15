(() => {
	$(document).ready(() => {
		let $button = $('#search-button');

		$button.click(advancedSearch);
	})
})();

let advancedSearch = () => {
	let searchValue = $('#advanced-search').val();
	if (searchValue == "") return;
	const message = "No results found for ";

	alert(message + searchValue);
}