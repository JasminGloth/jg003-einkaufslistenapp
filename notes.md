# Schritte

- products
    -id
    -name
    -priceKaufland
    -priceLidl
    -priceAldi
    -departmentId

{
        "id":,
        "name": "",
        "priceKaufland":,
        "priceLidl":,
        "priceAldi":,
        "departmentId":,
    }

-buyItems
    -id
    -productId
    -amount
- departments
    -id
    -name


ToDo:
- 3 json-Datein erstellen
- Preisvergleichs-Seite und Einkaufsliste-Seite erstellen




Aussehen Beispiel Seite Preisvergleich:

                                      Kaufland            Lidl            Aldi

Molkerei
2 Käse                                 2.78 €             2.58 €          2.38 €

Wurstwaren
1 Bacon                                1.19 €             1.29 €          1.29 €


Aussehen Beispiel Seite Kaufliste

Aldi

  Molkerei
  2 Käse

Kaufland

  Wurstwaren
  1 Bacon







<ul>
		${items
      .map((item) => {
        return `<li> ${item.amount}x ${item.title}</li>`;
      })
      .join("")}
	</ul>