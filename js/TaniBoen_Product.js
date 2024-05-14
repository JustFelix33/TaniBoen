<script>
function showText(button) {
    var text = button.textContent;
    document.getElementById('selectedDelivery').textContent = text.split('|')[0].trim();
    document.getElementById('result').textContent = 'Ongkos kirim: ' + text;
}
</script>