import { Module } from "@nestjs/common";
import { HumanCategoryService } from "./human_category.service";
import { HumanCategoryController } from "./human_category.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Human_category } from "./models/human_category.model";

@Module({
  imports: [SequelizeModule.forFeature([Human_category])],
  controllers: [HumanCategoryController],
  providers: [HumanCategoryService],
})
export class HumanCategoryModule {}
