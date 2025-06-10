"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Plus,
  Edit,
  Trash2,
  ExternalLink,
  Github,
  Settings,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Project {
  _id?: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  sourceCodeUrl?: string;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
}

interface Skill {
  _id?: string;
  title: string;
  img: string;
  createdAt?: string;
  updatedAt?: string;
}

export default function PortfolioDashboard() {
  const [apiUrl, setApiUrl] = useState("http://localhost:3000/api");
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("projects");
  const { toast } = useToast();

  // Form states
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Project | Skill | null>(null);
  const [formData, setFormData] = useState<Partial<Project & Skill>>({});

  // Fetch data
  const fetchProjects = async () => {
    if (!apiUrl) return;
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/projects`);
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch projects",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to connect to API",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchSkills = async () => {
    if (!apiUrl) return;
    setLoading(true);
    try {
      const response = await fetch(`${apiUrl}/skills`);
      if (response.ok) {
        const data = await response.json();
        setSkills(data);
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch skills",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to connect to API",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // CRUD operations
  const handleAdd = async () => {
    const endpoint = activeTab === "projects" ? "projects" : "skills";
    try {
      const response = await fetch(`${apiUrl}/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: `${
            activeTab === "projects" ? "Project" : "Skill"
          } added successfully`,
        });
        setIsAddDialogOpen(false);
        setFormData({});
        if (activeTab === "projects") {
          fetchProjects();
        } else {
          fetchSkills();
        }
      } else {
        toast({
          title: "Error",
          description: "Failed to add item",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to connect to API",
        variant: "destructive",
      });
    }
  };

  const handleUpdate = async () => {
    if (!editingItem?._id) return;
    const endpoint = activeTab === "projects" ? "projects" : "skills";
    try {
      const response = await fetch(`${apiUrl}/${endpoint}/${editingItem._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: `${
            activeTab === "projects" ? "Project" : "Skill"
          } updated successfully`,
        });
        setIsEditDialogOpen(false);
        setEditingItem(null);
        setFormData({});
        if (activeTab === "projects") {
          fetchProjects();
        } else {
          fetchSkills();
        }
      } else {
        toast({
          title: "Error",
          description: "Failed to update item",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to connect to API",
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    const endpoint = activeTab === "projects" ? "projects" : "skills";
    try {
      const response = await fetch(`${apiUrl}/${endpoint}/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: `${
            activeTab === "projects" ? "Project" : "Skill"
          } deleted successfully`,
        });
        if (activeTab === "projects") {
          fetchProjects();
        } else {
          fetchSkills();
        }
      } else {
        toast({
          title: "Error",
          description: "Failed to delete item",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to connect to API",
        variant: "destructive",
      });
    }
  };

  const openEditDialog = (item: Project | Skill) => {
    setEditingItem(item);
    setFormData(item);
    setIsEditDialogOpen(true);
  };

  const openAddDialog = () => {
    setFormData({});
    setIsAddDialogOpen(true);
  };

  useEffect(() => {
    if (activeTab === "projects") {
      fetchProjects();
    } else {
      fetchSkills();
    }
  }, [activeTab, apiUrl]);

  if (process.env.NODE_ENV === "production") {
    notFound(); // triggers a 404 in production
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Portfolio Dashboard</h1>

          {/* API URL Input */}
          <div className="flex gap-4 items-center mb-6">
            <div className="flex-1">
              <Label htmlFor="api-url">API Base URL</Label>
              <Input
                id="api-url"
                value={apiUrl}
                onChange={(e) => setApiUrl(e.target.value)}
                placeholder="http://localhost:3000/api"
                className="mt-1"
              />
            </div>
            <Button variant="outline" size="icon" className="mt-6">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList className="grid w-[400px] grid-cols-2">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>

            <Button onClick={openAddDialog}>
              <Plus className="h-4 w-4 mr-2" />
              Add {activeTab === "projects" ? "Project" : "Skill"}
            </Button>
          </div>

          {/* Projects Tab */}
          <TabsContent value="projects">
            {loading ? (
              <div className="text-center py-8">Loading projects...</div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <Card key={project._id} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={
                          project.imageUrl ||
                          "/placeholder.svg?height=200&width=300"
                        }
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="line-clamp-1">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2 flex-wrap">
                        {project.liveUrl && (
                          <Badge variant="secondary">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Live
                          </Badge>
                        )}
                        {project.sourceCodeUrl && (
                          <Badge variant="secondary">
                            <Github className="h-3 w-3 mr-1" />
                            Source
                          </Badge>
                        )}
                      </div>
                      {project.tags && (
                        <div className="flex gap-1 mt-2 flex-wrap">
                          {project.tags.map((tag, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditDialog(project)}
                      >
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => project._id && handleDelete(project._id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" />
                        Delete
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills">
            {loading ? (
              <div className="text-center py-8">Loading skills...</div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skills.map((skill) => (
                  <Card key={skill._id} className="text-center">
                    <CardHeader className="pb-2">
                      <div className="w-16 h-16 mx-auto relative">
                        <Image
                          src={
                            `/images/${skill.img}` ||
                            "/placeholder.svg?height=64&width=64"
                          }
                          alt={skill.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="font-medium text-sm">{skill.title}</p>
                    </CardContent>
                    <CardFooter className="flex gap-1 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditDialog(skill)}
                        className="flex-1"
                      >
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => skill._id && handleDelete(skill._id)}
                        className="flex-1"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Add Dialog */}
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                Add New {activeTab === "projects" ? "Project" : "Skill"}
              </DialogTitle>
              <DialogDescription>
                Fill in the details to add a new{" "}
                {activeTab === "projects" ? "project" : "skill"}.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>

              {activeTab === "projects" ? (
                <>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="imageUrl">Image URL</Label>
                    <Input
                      id="imageUrl"
                      value={formData.imageUrl || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, imageUrl: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="liveUrl">Live URL (Optional)</Label>
                    <Input
                      id="liveUrl"
                      value={formData.liveUrl || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, liveUrl: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="sourceCodeUrl">
                      Source Code URL (Optional)
                    </Label>
                    <Input
                      id="sourceCodeUrl"
                      value={formData.sourceCodeUrl || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          sourceCodeUrl: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="tags">Tags (comma-separated)</Label>
                    <Input
                      id="tags"
                      value={formData.tags?.join(", ") || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          tags: e.target.value
                            .split(",")
                            .map((tag) => tag.trim()),
                        })
                      }
                    />
                  </div>
                </>
              ) : (
                <div className="grid gap-2">
                  <Label htmlFor="img">Image URL</Label>
                  <Input
                    id="img"
                    value={formData.img || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, img: e.target.value })
                    }
                  />
                </div>
              )}
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleAdd}>
                Add {activeTab === "projects" ? "Project" : "Skill"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Edit Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                Edit {activeTab === "projects" ? "Project" : "Skill"}
              </DialogTitle>
              <DialogDescription>
                Update the details of this{" "}
                {activeTab === "projects" ? "project" : "skill"}.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="edit-title">Title</Label>
                <Input
                  id="edit-title"
                  value={formData.title || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>

              {activeTab === "projects" ? (
                <>
                  <div className="grid gap-2">
                    <Label htmlFor="edit-description">Description</Label>
                    <Textarea
                      id="edit-description"
                      value={formData.description || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="edit-imageUrl">Image URL</Label>
                    <Input
                      id="edit-imageUrl"
                      value={formData.imageUrl || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, imageUrl: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="edit-liveUrl">Live URL (Optional)</Label>
                    <Input
                      id="edit-liveUrl"
                      value={formData.liveUrl || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, liveUrl: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="edit-sourceCodeUrl">
                      Source Code URL (Optional)
                    </Label>
                    <Input
                      id="edit-sourceCodeUrl"
                      value={formData.sourceCodeUrl || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          sourceCodeUrl: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="edit-tags">Tags (comma-separated)</Label>
                    <Input
                      id="edit-tags"
                      value={formData.tags?.join(", ") || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          tags: e.target.value
                            .split(",")
                            .map((tag) => tag.trim()),
                        })
                      }
                    />
                  </div>
                </>
              ) : (
                <div className="grid gap-2">
                  <Label htmlFor="edit-img">Image URL</Label>
                  <Input
                    id="edit-img"
                    value={formData.img || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, img: e.target.value })
                    }
                  />
                </div>
              )}
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleUpdate}>
                Update {activeTab === "projects" ? "Project" : "Skill"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
