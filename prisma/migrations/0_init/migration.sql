-- CreateTable
CREATE TABLE "User" (
    "id" BIGSERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "user_name" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" BIGSERIAL NOT NULL,
    "author_id" BIGINT,
    "project_name" VARCHAR(255) NOT NULL,
    "project_description" VARCHAR(4095),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" BIGSERIAL NOT NULL,
    "parent_project_id" BIGINT,
    "due_date" TIMESTAMP(3),
    "task_name" VARCHAR(255) NOT NULL,
    "task_description" VARCHAR(4095),
    "complete" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TaskConnection" (
    "id" BIGSERIAL NOT NULL,
    "parent_task_id" BIGINT NOT NULL,
    "child_task_id" BIGINT NOT NULL,

    CONSTRAINT "TaskConnection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_user_name_key" ON "User"("user_name");

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_parent_project_id_fkey" FOREIGN KEY ("parent_project_id") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskConnection" ADD CONSTRAINT "TaskConnection_parent_task_id_fkey" FOREIGN KEY ("parent_task_id") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskConnection" ADD CONSTRAINT "TaskConnection_child_task_id_fkey" FOREIGN KEY ("child_task_id") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

