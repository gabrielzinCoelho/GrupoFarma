-- DropForeignKey
ALTER TABLE "sale_products" DROP CONSTRAINT "sale_products_sale_id_fkey";

-- AddForeignKey
ALTER TABLE "sale_products" ADD CONSTRAINT "sale_products_sale_id_fkey" FOREIGN KEY ("sale_id") REFERENCES "sales"("id") ON DELETE CASCADE ON UPDATE CASCADE;
