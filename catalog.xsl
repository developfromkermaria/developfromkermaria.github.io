<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:template match="/">

<ul id="result">
<xsl:for-each select="catalog/cd">
<li>
    <h2 style="color:white;"><xsl:value-of select="artist"/></h2>
    <div class="card-content">
      <img src="https://i.la-croix.com/x/2021/04/05/1201149334/ministre-linterieur-saisi-prefecture-police-Paris-enquete-administrative_0.jpg"></img>
      <div class="infos">
        <p><xsl:value-of select="title"/></p>
        <p><xsl:value-of select="year"/> ⭐</p>
      </div>
    </div>
  </li>
</xsl:for-each>
</ul>

</xsl:template>
</xsl:stylesheet>>
